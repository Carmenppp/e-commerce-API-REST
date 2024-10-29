import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Autorizacion no recibida" })
    }

    token = token.split(" ")[1]

    try {
        const { id, email } = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Payload decodificado:", { id, email });
        req.email = email;
        req.id = id
        next();

    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Token invalido" })
    }
}