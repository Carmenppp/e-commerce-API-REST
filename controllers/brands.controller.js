import { BrandsModel } from "../models/brands.model.js";

const add = async (req, res) => {
    try {
        const { description } = req.body
    
        const newBrand = await BrandsModel.create({ description });

        return res.status(201).json({ ok: true, msg: newBrand });
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

        const brands = await BrandsModel.findAll();

        return res.json({ brands });
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
        const brand = await BrandsModel.findOneById(id);
        return res.json({ brand })
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

        await BrandsModel.update({
            id, description
        });

        return res.status(201).json({ ok: true, msg: "Marca actualizada con exito" });
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
        await BrandsModel.deleteById(id);
        return res.json({ ok: true, msg: "Marca eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const BrandsController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
