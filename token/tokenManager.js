import jwt from "jsonwebtoken";

export const tokenFunct = (req, res) => {
  const { email, id, role_id } = req;
 
  try {

    const token = jwt.sign(
      {
        email: email,
        id: id,
        role_id: role_id
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el token' });
  }
}
