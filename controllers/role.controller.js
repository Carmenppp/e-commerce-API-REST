import { RoleModel } from "../models/role.model.js";

const add = async (req, res) => {
    try {
        const { description } = req.body;

        const newRol = await RoleModel.create({
           description
        });

        return res.status(201).json({ ok: true, msg: newRol });
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


export const RoleController = {
    add,
    getAll,
};
