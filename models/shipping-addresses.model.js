import { db } from "../database/connection.database.js";

const create = async ({ description }) => {
    const query = {
        text: `
    INSERT INTO shipping_addresses (description)
    VALUES ($1)
    RETURNING id
    `,
        values: [description],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM shipping_addresses
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM shipping_addresses
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id, description}) => {
    const query = {
        text: `
        UPDATE shipping_addresses
        SET  description = $2
        WHERE id = $1
        RETURNING *
        `,
        values: [id, description],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM shipping_addresses
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const ShippinAdressesModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
