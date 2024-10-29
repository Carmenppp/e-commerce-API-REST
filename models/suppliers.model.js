import { db } from "../database/connection.database.js";

const create = async ({ name, contactInfo }) => {
    const query = {
        text: `
    INSERT INTO suppliers (name, contact_info)
    VALUES ($1, $2)
    RETURNING id
    `,
        values: [name, contactInfo],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM suppliers
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM suppliers
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id, name, contactInfo }) => {
    const query = {
        text: `
        UPDATE suppliers
        SET name = $2, contact_info = $3
        WHERE id = $1
        RETURNING *
        `,
        values: [id, name, contactInfo ],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM suppliers
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const SuppliersModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
