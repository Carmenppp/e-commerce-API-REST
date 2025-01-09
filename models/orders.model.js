import { db } from "../database/connection.database.js";

const create = async ({ userId, status, deliveredAt }) => {
    const query = {
        text: `
    INSERT INTO orders (user_id, status, delivered_at)
    VALUES ($1, $2, $3)
    RETURNING id
    `,
        values: [userId, status, deliveredAt],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM orders
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM orders
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id, userId, status, deliveredAt }) => {
    const query = {
        text: `
        UPDATE orders
        SET user_id = $2, status = $3, delivered_at = $4
        WHERE id = $1
        RETURNING *
        `,
        values: [id, userId, status, deliveredAt ],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM orders
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const OrdersModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
