import { SaleDetailModel } from "../models/sale_detail.model.js";

const add = async (req, res) => {
    try {
        const { id_order, id_invoice, quantity, price, total } = req.body;

        const newSaleDetail = await SaleDetailModel.create({
            id_order, id_invoice, quantity, price, total
        });

        return res.status(201).json({ ok: true, msg: newSaleDetail });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
};

const getAll = async (req, res) => {
    try {

        const saleDetails = await SaleDetailModel.findAll();

        return res.json({ saleDetails });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
};


const findOne = async (req, res) => {
    try {
        const { id_order, id_invoice }  = req.params;
        const saleDetail = await SaleDetailModel.findOneById( {id_order, id_invoice} );
        return res.json({ saleDetail })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

const updateItem = async (req, res) => {
    try {
        const {  quantity, price, total} = req.body;
        const { id_order, id_invoice } = req.params; // Obtén las claves compuestas desde req.params

        // Actualiza el detalle basado en ambas claves
        const updated = await SaleDetailModel.update(
            { id_order, id_invoice, quantity, price, total }
        );

        if (updated[0] === 0) {
            return res.status(404).json({ ok: false, msg: "Detalle no encontrado" });
        }

        return res.status(200).json({ ok: true, msg: "Detalle actualizado con éxito" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
};

const remove = async (req, res) => {
    try {
        const { id_order, id_invoice } = req.params;
       const deleted = await SaleDetailModel.deleteById({id_order, id_invoice});
        if (deleted === 0) {
            return res.status(404).json({ ok: false, msg: "Detalle no encontrado" });
        }

        return res.json({ ok: true, msg: "Detalle eliminado exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const SaleDetailController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
