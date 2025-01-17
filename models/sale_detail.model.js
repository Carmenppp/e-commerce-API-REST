import { db } from "../database/connection.database.js";

const create = async ({ id_order, id_invoice, quantity, price, total }) => {
    const query = {
        text: `
    INSERT INTO sale_detail (id_order, id_invoice, quantity, price, total)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
        values: [id_order, id_invoice, quantity, price, total],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM sale_detail
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async ({id_order, id_invoice}) => {
    const query = {
        text: `
        SELECT * FROM sale_detail
        WHERE id_order = $1 AND id_invoice = $2
        `,
        values: [id_order, id_invoice],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id_order, id_invoice, quantity, price, total }) => {
    const query = {
        text: `
        UPDATE sale_detail
        SET quantity = $3, quantity = $4, price = $5, total = $6
        WHERE id_order = $1 AND id_invoice = $2
        RETURNING *
        `,
        values: [id_order, id_invoice, quantity, price, total],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async ({id_order, id_invoice}) => {
    const query = {
        text: `
        DELETE FROM sale_detail
        WHERE  id_order = $1 AND id_invoice = $2
        RETURNING *
      `,
        values: [id_order, id_invoice],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const SaleDetailModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
