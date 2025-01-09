import { InventoryModel } from "../models/inventory.model.js";

const add = async (req, res) => {
    try {
        const { productId, quantity, movementType, description, movementDate } = req.body;

        const newInventory = await InventoryModel.create({
            productId, quantity, movementType, description, movementDate
        });

        return res.status(201).json({ ok: true, msg: newInventory });
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

        const inventory = await InventoryModel.findAll();

        return res.json({ inventory });
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
        const inventory = await InventoryModel.findOneById(id);
        return res.json({ inventory })
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
        const { productId, quantity, movementType, description, movementDate } = req.body;
        const id = req.params.id;

        await OrdersModels.update({
           id,productId, quantity, movementType, description, movementDate
        });

        return res.status(201).json({ ok: true, msg: "Inventario actualizada con exito" });
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
        await InventoryModel.deleteById(id);
        return res.json({ ok: true, msg: "Inventario eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const InventoryController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
