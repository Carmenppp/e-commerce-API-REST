import moment from "moment";
import { db } from "../database/connection.database.js";

const payTime = moment.utc().format('YYYY-MM-DDTHH:mm:ss');

const createPayment = async ({ order_id, payment_id, pay_time=payTime, amount, currency }) => {
    const query = {
        text: `
        INSERT INTO payments (order_id, payment_id, pay_time, amount, currency)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `,
        values: [order_id, payment_id, pay_time, amount, currency],
    };
    const { rows } = await db.query(query);
    return rows[0];
}


export const PaymentModel = {
    createPayment
}