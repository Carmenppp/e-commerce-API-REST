import { db } from "../database/connection.database.js";

const create = async ({number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company}) => {
    const query = {
        text: `
         INSERT INTO invoice (number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING id
        `,
        values: [number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const findAll = async () => {
    const query = {
        text: `
        SELECT i.id, i.number, i.date, c.name, t.number timbrado, 
        cl.name client, ty.description type, c.id id_company,
        t.id id_timbrado, cl.id id_client, ty.id id_type, u.id user_id
        FROM invoice i
        join users u on u.id = i.id_user
        join company c on c.id = i.id_company
        join timbrado t on t.id = i.id_timbrado
        join clients cl on cl.id = i.id_client 
        join invoice_type ty on ty.id = i.id_invoice_type
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM invoice
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}


 
const update = async (id, number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company) => {
    const query = {
        text: `
         UPDATE invoice
                SET number = $1, date = $2, term = $3, id_invoice_type = $4, id_timbrado = $5, id_client = $6, id_user = $7, id_company = $8
                WHERE id = $9
        `,
        values: [id, number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM invoice WHERE id = $1
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}


export const InvoiceModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
