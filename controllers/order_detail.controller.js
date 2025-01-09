import { OrderDetailModel } from "../models/order_detail.model.js";

const add = async (req, res) => {
    try {
        const { cartId, orderId, price } = req.body;

        const newOrderDetail = await OrderDetailModel.create({
            cartId, orderId, price
        });

        return res.status(201).json({ ok: true, msg: newOrderDetail });
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

        const suppliers = await OrderDetailModel.findAll();

        return res.json({ suppliers });
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
        const id = req.params.id;
        const category = await OrderDetailModel.findOneById(id);
        return res.json({ category })
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
        const { cartId, orderId, price } = req.body;
        const id = req.params.id;

        await OrderDetailModel.update({
            cartId, orderId, price
        });

        return res.status(201).json({ ok: true, msg: "Detalle actualizada con exito" });
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
        const id = req.params.id;
        await OrderDetailModel.deleteById(id);
        return res.json({ ok: true, msg: "Detalle eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const OrderDetailController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
