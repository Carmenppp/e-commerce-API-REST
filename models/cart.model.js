import { db } from "../database/connection.database.js";

const create = async ({ userId, productId, quantity }) => {
    const query = {
        text: `
    INSERT INTO cart (user_id, product_id, quantity)
    VALUES ($1, $2, $3)
    RETURNING id
    `,
        values: [userId, productId, quantity],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM cart
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM cart
        WHERE id = $1 AND status = 'active'
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id, userId, productId, quantity }) => {
    const query = {
        text: `
        UPDATE cart
        SET user_id = $2, product_id = $3, quantity = $4
        WHERE id = $1
        RETURNING *
        `,
        values: [ id, userId, productId, quantity ],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM cart
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const CartModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
