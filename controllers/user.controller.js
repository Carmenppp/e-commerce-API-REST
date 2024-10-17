import bcryptjs from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import { tokenFunct } from "../token/tokenManager.js";

const register = async (req, res) => {
  try {
    const { username, email, password, roleId, addressId, cityId } = req.body;

    if (!email || !username || !password || !roleId || !addressId || !cityId) {
      return res
        .status(400)
        .json({ ok: false, msg: "Username, email, password, rol, address y ciudad requeridos" });
    }

    if (password.length < 4)
      return res.status(400).json({
        ok: false,
        msg: "Password con minimo 4 caracteres requeridos",
      });

    const user = await UserModel.findOneByEmail(email);

    if (user) {
      return res.status(409).json({ ok: false, msg: "El email ya existe" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const userCreated = await UserModel.create({
      email,
      password: hashedPassword,
      username,
      roleId,
      addressId, 
      cityId
    });
    const token = tokenFunct(userCreated, res);
    return res.status(201).json({ ok: true, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error server",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ ok: false, msg: "Email y password requeridos" });
    }

    const user = await UserModel.findOneByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }
    
    const token = tokenFunct(user, res);

    return res.json({ ok: true, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error server",
    });
  }
};


const profile = async (req, res) => {
  try {
    const user = await UserModel.findOneByEmail(req.email)
    return res.json({ ok: true, msg: user })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error server",
    });
  }
}

export const UserController = {
  register,
  login,
  profile
};
