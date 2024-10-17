import "dotenv/config";
import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js"
import adamsPayRouter from "./routes/adamsPay.route.js";
import categoryRouter from "./routes/categories.route.js";
import brandRouter from "./routes/brands.route.js"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions.js";
import cors from 'cors'

const app = express();
const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return callback(
            "Error de CORS origin: " + origin + " No autorizado!"
        );
    },
    credentials: true,
}))
app.use(express.json());
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/brands", brandRouter);
app.use("/api/v1/adamsPay", adamsPayRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor andando en " + PORT));
