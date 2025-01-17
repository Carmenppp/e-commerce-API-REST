import { InvoiceModel } from "../models/invoice.model.js";

const add = async (req, res) => {
    try {
        const { number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company } = req.body;

        const invoice = await InvoiceModel.create({ number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company });

        return res.status(201).json({ok:true, invoice});
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al crear la factura y los detalles",
        });
    }
};

const getAll = async (req, res) => {
    try {
        const invoices = await InvoiceModel.findAll();

        return res.json({ ok: true, invoices });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al obtener las facturas",
        });
    }
};

const findOne = async (req, res) => {
    try {
        const id = req.params.id;

        const invoice = await InvoiceModel.findOneById(id);

        if (!invoice) {
            return res.status(404).json({
                ok: false,
                msg: "Factura no encontrada",
            });
        }

        return res.json({ ok: true, invoice });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al obtener la factura",
        });
    }
};

const updateItem = async (req, res) => {
    try {
        const { number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company } = req.body;
        const id = req.params.id;

        const invoice = await InvoiceModel.update({
           id, number, date, term, id_invoice_type, id_timbrado, id_client, id_user, id_company
        });

        return res.status(200).json(invoice);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al actualizar la factura",
        });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params.id;

        const result = await InvoiceModel.deleteById(id);

        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al eliminar la factura y los detalles",
        });
    }
};

export const InvoiceController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove,
};
