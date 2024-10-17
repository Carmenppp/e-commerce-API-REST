import { db } from "../database/connection.database.js";

const create = async ({ description }) => {
    const query = {
        text: `
    INSERT INTO departments (description)
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
        SELECT * FROM departments
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

const findOneById = async (id) => {
    const query = {
        text: `
        SELECT * FROM departments
        WHERE id = $1
        `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const update = async ({ description}) => {
    const query = {
        text: `
        UPDATE departments
        SET  description
        WHERE id = $1
        RETURNING *
        `,
        values: [description],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

const deleteById = async (id) => {
    const query = {
        text: `
        DELETE FROM departments
        WHERE id = $1
        RETURNING *
      `,
        values: [id],
    };
    const { rows } = await db.query(query);
    return rows[0];
}

export const DepartmentsModel = {
    create,
    findAll,
    findOneById,
    update,
    deleteById
};

