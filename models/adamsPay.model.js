import moment from 'moment'

 const createDebt = (idDeuda, amountValue, label) => {
    const inicioValidez = moment.utc().format('YYYY-MM-DDTHH:mm:ss');
    const finValidez = moment.utc().add(2, 'days').format('YYYY-MM-DDTHH:mm:ss');
  
    return {
      docId: idDeuda,
      amount: { currency: 'PYG', value: amountValue },
      label: label,
      validPeriod: {
        start: inicioValidez,
        end: finValidez
      }
    };
  }
  
  export const AdamsPayModel = {
    createDebt
  }