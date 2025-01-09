import { OrdersModel } from "../models/orders.model.js"; 

const add = async (req, res) => {
    try {
        const { userId, status } = req.body;

        const newOrder = await OrdersModel.create({
            userId, status 
        });

        return res.status(201).json({ ok: true, msg: newOrder });
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

        const orders = await OrdersModel.findAll();

        return res.json({ orders });
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
        const order = await OrdersModel.findOneById(id);
        return res.json({ order })
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
        const { userId, status } = req.body;
        const id = req.params.id;

        await OrdersModels.update({
           id, userId, status
        });

        return res.status(201).json({ ok: true, msg: "Pedido actualizada con exito" });
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
        await OrdersModel.deleteById(id);
        return res.json({ ok: true, msg: "Pedido eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const OrdersController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
