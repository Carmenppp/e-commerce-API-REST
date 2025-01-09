import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Autorizacion no recibida" })
    }

    token = token.split(" ")[1]

    try {
        const { id, email, role_id } = jwt.verify(token, process.env.JWT_SECRET)
        req.email = email;
        req.id = id;
        req.role_id = role_id;
        next();

    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: "Token invalido" })
    }
}

export const verifyAdmin = (req, res, next) => {
    if (req.role_id === 1) {
        return next();
    }
    
    return res.status(403).json({error: "Unathorized, only admin rol allowed"})
}

export const verifySeller = (req, res, next) => {
    if (req.role_id === 2) {
        return next();
    }
    
    return res.status(403).json({error: "Unathorized, only seller rol allowed"})
}

