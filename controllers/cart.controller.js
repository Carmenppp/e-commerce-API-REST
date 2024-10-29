import { CartModel } from "../models/cart.model.js";

const add = async (req, res) => {
    try {
        console.log(req.email, req.id)
        const userId = req.id;
        const { productId, quantity } = req.body;

        const newCart = await CartModel.create({
            userId, productId, quantity
        });

        return res.status(201).json({ ok: true, msg: newCart });
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

        const cart = await CartModel.findAll();

        return res.json({ cart });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
};


const getUserCart = async (req, res) => {
    try {
        const id = req.params.id;
        
        const cart = await CartModel.findOne(id);

        if (!cart) {
            return res.status(404).json({ ok: false, msg: "No se encontró carrito activo" });
        }

        return res.json({ ok: true, cart });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
};

const updateItem = async (req, res) => {
    try {
        const {  productId, quantity, status } = req.body;
        const id = req.params.id;

        await CartController.update({
           id, productId, quantity, status
        });

        return res.status(201).json({ ok: true, msg: "Carrito actualizado con exito" });
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
        await CartController.deleteById(id);
        return res.json({ ok: true, msg: "Proveedor eliminada exitosamente" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error server",
        });
    }
}

export const CartController = {
    add,
    getAll,
    getUserCart,
    updateItem,
    remove
};
