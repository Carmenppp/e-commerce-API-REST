import { db } from "../database/connection.database.js";

const create = async ({ username, email, password, roleId, addressId, cityId }) => {
  const query = {
    text: `
    INSERT INTO users (username, email, password, role_id, address_id, city_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING username, email, id, role_id, address_id, city_id
    `,
    values: [username, email, password, roleId, addressId, cityId],
  };
  const { rows } = await db.query(query);
  return rows[0];
};

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

export const UserModel = {
  create,
  findOneByEmail
};
