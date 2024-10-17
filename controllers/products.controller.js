import { ProductModel } from "../models/products.model.js";

const add = async (req, res) => {
    try {
        const { name, description, price, stock, imageUrl, idCategory, brandId } = req.body;

        const newProduct = await ProductModel.create({
            name, description, price, stock, imageUrl, idCategory, brandId
        });

        return res.status(201).json({ ok: true, msg: newProduct });
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

        const products = await ProductModel.findAll();

        return res.json({ products });
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
        const product = await ProductModel.findOneById(id);
        return res.json({ product })
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
        const { name, description, price, stock, imageUrl, idCategory, brandId} = req.body;
        const id = req.params.id;

        await ProductModel.update({
            id, name, description, price, stock, imageUrl, idCategory, brandId
        });

        return res.status(201).json({ ok: true, msg: "Producto actualizado con exito" });
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
        await ProductModel.deleteById(id);
        return res.json({ ok: true, msg: "Producto eliminado exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const ProductController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
