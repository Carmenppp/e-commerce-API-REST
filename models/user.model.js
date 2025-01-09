import { db } from "../database/connection.database.js";

const create = async ({ username, email, password, addressId, cityId }) => {
  const query = {
    text: `
    INSERT INTO users (username, email, password, address_id, city_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING username, email, id, address_id, city_id
    `,
    values: [username, email, password, addressId, cityId],
  };
  const { rows } = await db.query(query);
  return rows[0];
};
const findAllM = async () =>{
  const query = {
    text: `
    SELECT * FROM users
    `,
};
const { rows } = await db.query(query);
return rows;
}
const findOneByEmail = async(email)=>{
    const query = {
        text: `
        SELECT * FROM users
        WHERE email = $1
        `,
        values: [email],
      };
      const { rows } = await db.query(query);
      return rows[0];
}

const findOneById = async (id) => {
  const query = {
    text: `
    SELECT * FROM users
    WHERE id = $1
    `,
    values: [id],
  };
  const { rows } = await db.query(query);
  return rows[0];
}

const updateRoleSeller = async (id) => {
  const query = {
    text: `
    UPDATE users
    SET role_id = 2
    WHERE id = $1
    RETURNING *
    `,
    values: [id],
  };
  const { rows } = await db.query(query);
  return rows[0];
}

export const UserModel = {
  create,
  findOneByEmail,
  findAllM,
  findOneById,
  updateRoleSeller
};
