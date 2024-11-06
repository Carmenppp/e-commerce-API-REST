import { ShippinAdressesModel } from "../models/shipping-addresses.model.js";

const add = async (req, res) => {
    try {
        const { name, description, price, stock, imageUrl, idCategory, brandId } = req.body;

        const newProduct = await ShippinAdressesModel.create({
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

        const shippingAddres = await ShippinAdressesModel.findAll();

        return res.json({ shippingAddres });
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
        const product = await ShippinAdressesModel.findOneById(id);
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

        await ShippinAdressesModel.update({
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
        await ShippinAdressesModel.deleteById(id);
        return res.json({ ok: true, msg: "Producto eliminado exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const ShippingAddressController = {
    add,
    getAll,
    findOne,
    updateItem,
    remove
};
