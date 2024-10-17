import jwt from "jsonwebtoken";

export const tokenFunct = (req, res) => {
  const { email } = req;
  try {
    const { uid } = req;

    const token = jwt.sign(
      {
        email: email,
        id: uid // Incluye el uid en el payload del token
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
