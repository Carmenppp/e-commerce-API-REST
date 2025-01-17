import { CartModel } from "../models/cart.model.js";

const add = async (req, res) => {
    try {
        const userId = req.id;
        const { productId, quantity } = req.body;

        const parsedProductId = parseInt(productId, 10);
        const parsedQuantity = parseInt(quantity, 10);
        const newCart = await CartModel.create({
            userId,
            productId: parsedProductId,
            quantity: parsedQuantity
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


const getUserCart = async (req, res) => {
    try {
        const id = req.id;
        
        const cart = await CartModel.findOneById(id);

        if (!cart) {
            return res.status(404).json({ ok: false, msg: "No se encontró carrito" });
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
const getCartById = async (req, res) => {
    try {
        const {id} = req.body;
        
        const cart = await CartModel.findOneById(id);

        if (!cart) {
            return res.status(404).json({ ok: false, msg: "No se encontró carrito" });
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

        await CartModel.update({
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
        await CartModel.deleteById(id);
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
    getCartById,
    add,
    getUserCart,
    updateItem,
    remove
};
