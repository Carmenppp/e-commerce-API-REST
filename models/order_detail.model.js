import { db } from "../database/connection.database.js";

const create = async ({ cartId, orderId, price }) => {
    const query = {
        text: `
    INSERT INTO order_detail (cart_id, order_id, price)
    VALUES ($1, $2, $3)
    RETURNING id
    `,
        values: [cartId, orderId, price ],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM order_detail
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM order_detail
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ cartId, orderId, price  }) => {
    const query = {
        text: `
        UPDATE order_detail
        SET cart_id = $2, order_id = $3, price = $4
        WHERE id = $1
        RETURNING *
        `,
        values: [cartId, orderId, price ],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM order_detail
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const OrderDetailModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
