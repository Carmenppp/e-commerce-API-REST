import { RoleModel } from "../models/role.model.js";

const add = async (req, res) => {
    try {
        const { description } = req.body;

        const newCategory = await RoleModel.create({
           description
        });

        return res.status(201).json({ ok: true, msg: newCategory });
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

        const role = await RoleModel.findAll();

        return res.json({ role });
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
        const category = await RoleModel.findOneById(id);
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
        const { description } = req.body;
        const id = req.params.id;

        await RoleModel.update({
           id, description
        });

        return res.status(201).json({ ok: true, msg: "Categoria actualizada con exito" });
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
        await RoleModel.deleteById(id);
        return res.json({ ok: true, msg: "Categoria eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const RoleController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
