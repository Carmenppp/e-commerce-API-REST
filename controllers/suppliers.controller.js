import { SuppliersModel } from "../models/suppliers.model.js";

const add = async (req, res) => {
    try {
        const { name, contactInfo } = req.body;

        const newSupplier = await SuppliersModel.create({
            name, contactInfo
        });

        return res.status(201).json({ ok: true, msg: newSupplier });
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

        const suppliers = await SuppliersModel.findAll();

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
        const category = await SuppliersModel.findOneById(id);
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
        const { name, contactInfo } = req.body;
        const id = req.params.id;

        await SuppliersModel.update({
           id, name, contactInfo
        });

        return res.status(201).json({ ok: true, msg: "Proveedor actualizada con exito" });
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
        await SuppliersModel.deleteById(id);
        return res.json({ ok: true, msg: "Proveedor eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const SuppliersController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
