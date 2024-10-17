import axios from 'axios'
import "dotenv/config";
import { AdamsPayModel } from '../models/adamsPay.model.js';
import { PaymentModel } from '../models/payments.model.js';

const apiKey = process.env.ADAMSPAY_API_KEY;
const host = 'staging.adamspay.com';
const path = '/api/v1/debts';


const makeHttpsRequest = async (options, payload) => {
    try {
        const response = await axios({
          method: options.method,
          url: `https://${options.hostname}${options.path}`,
          headers: options.headers,
          data: payload,
        });
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw error;
      }
  };
  
  const createdDebtContr = async (req, res) => {
    const { idDeuda, amountValue, label } = req.body;
  
    try {
      const deuda = AdamsPayModel.createDebt(idDeuda, amountValue, label);
      const post = { debt: deuda };
      const payload = JSON.stringify(post);
  
      const options = {
        hostname: host,
        port: 443,
        path: path,
        method: 'POST',
        headers: {
          'apikey': apiKey,
          'Content-Type': 'application/json',
          'x-if-exists': 'update'
        }
      };
  
      const response = await makeHttpsRequest(options, payload);
  
      if (response.debt) {
        const debt = response.debt;
        const clientId =  req.id;
        
         await PaymentModel.createPayment({
          client_id: clientId, 
          payment_id: idDeuda, 
          amount:debt.amount.value, 
          currency: debt.amount.currency
        });
        res.status(200).json({ message: 'Deuda creada exitosamente', url: debt.payUrl });
      } else {
        res.status(400).json({ error: response.meta || 'Error al crear la deuda' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la conexión con la API' });
    }
  };

export const AdamsPayController = {
    createdDebtContr
}