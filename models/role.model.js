import { db } from "../database/connection.database.js";

const findAll = async () => {
    const query = {
        text: `
        SELECT * FROM roles
        `,
    };
    const { rows } = await db.query(query);
    return rows;
}

export const RoleModel = {
    findAll
}