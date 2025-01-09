import { db } from "../database/connection.database.js";

const create = async ({ productId, quantity, movementType, description, movementDate }) => {
    const query = {
        text: `
    INSERT INTO inventory (product_id, quantity, movement_type, description, movement_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
    `,
        values: [ productId, quantity, movementType, description, movementDate ],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM inventory
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM inventory
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id, productId, quantity, movementType, description, movementDate  }) => {
    const query = {
        text: `
        UPDATE inventory
        SET product_id = $2, quantity = $3, movementType = $4, description = $5, movement_date = $6
        WHERE id = $1
        RETURNING *
        `,
        values: [id, productId, quantity, movementType, description, movementDate ],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM inventory
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const InventoryModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
