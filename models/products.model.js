import { db } from "../database/connection.database.js";

const create = async ({ name, description, price, stock, imageUrl, idCategory, brandId }) => {
    const query = {
        text: `
    INSERT INTO products (name, description, price, stock, image_url, id_category, brand_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
    `,
        values: [name, description, price, stock, imageUrl, idCategory, brandId],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM products
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM products
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ id, name, description, price, stock, imageUrl, idCategory, brandId }) => {
    const query = {
        text: `
        UPDATE products
        SET name = $2, description = $3, price = $4, stock = $5, image_url = $6, id_category = $7, brand_id = $8, updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
        RETURNING *
        `,
        values: [id, name, description, price, stock,  imageUrl, idCategory, brandId  ],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM products
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const ProductModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
