import "dotenv/config";
import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js"
import adamsPayRouter from "./routes/adamsPay.route.js";
import categoryRouter from "./routes/categories.route.js";
import brandRouter from "./routes/brands.route.js"
import supplierRouter from "./routes/suppliers.route.js"
import cartRouter from "./routes/cart.route.js";
import roleRouter from "./routes/role.route.js";
import shippingRouter from "./routes/shippingAdress.route.js";
import citiesRouter from "./routes/cities.route.js";
import orderRouter from "./routes/orders.route.js"
import inventoryRouter from "./routes/invetory.route.js"
import invoiceRouter from "./routes/invoice.route.js"
import salesDetailRouter from "./routes/sale_detail.route.js"
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
app.use("/api/v1/suppliers", supplierRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/role", roleRouter);
app.use("/api/v1/cities", citiesRouter);
app.use("/api/v1/shippingAd", shippingRouter);
app.use("/api/v1/adamsPay", adamsPayRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/inventory", inventoryRouter)
app.use("/api/v1/invoice", invoiceRouter);
app.use("/api/v1/sale-detail", salesDetailRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor andando en " + PORT));
