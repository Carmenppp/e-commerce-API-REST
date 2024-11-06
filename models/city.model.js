import { db } from "../database/connection.database.js";

const create = async ({ description, departmentId }) => {
    const query = {
        text: `
    INSERT INTO cities (description, department_id)
    VALUES ($1, $2)
    RETURNING id
    `,
        values: [description, departmentId],
    };
    const { rows } = await db.query(query);
    return rows[0];
};

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM cities
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM cities
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
        UPDATE cities
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
        DELETE FROM cities
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const CitiesModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};
