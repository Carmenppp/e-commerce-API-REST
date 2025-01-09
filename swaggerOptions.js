// swaggerOptions.js
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API para manejar operaciones de productos y clientes",
    },
    servers: [
      {
        url: "http://localhost:3000", // Cambia esto si es necesario
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["email", "password"],
          properties: {
            username: {
              type: "string",
              description: "Username del usuario",
            },
            email: {
              type: "string",
              description: "Correo electrónico del usuario",
            },
            password: {
              type: "string",
              description: "Contraseña del usuario",
            },
            name: {
              type: "string",
              description: "Nombre del usuario",
            },
            roleId: {
              type: "number",
              description: "Rol del usuario",
            },
            addressId: {
              type: "number",
              description: "Direccion de envio del usuario",
            },
            cityId: {
              type: "number",
              description: "Ciudad del usuario",
            },
          },
          example: {
            username: "Juan Pérez",
            email: "usuario@ejemplo.com",
            password: "123456",
            roleId: 2,
            addressId: 1,
            cityId: 1,
          },
        },
        Login: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              description: "Correo electrónico del usuario",
            },
            password: {
              type: "string",
              description: "Contraseña del usuario",
            },
          },
          example: {
            email: "usuario@ejemplo.com",
            password: "123456",
          },
        },
        Product: {
          type: "object",
          required: ["name", "price"],
          properties: {
            id: {
              type: "integer",
              description: "ID del producto",
            },
            name: {
              type: "string",
              description: "Nombre del producto",
            },
            description: {
              type: "string",
              description: "Descripcion del producto",
            },
            price: {
              type: "number",
              description: "Precio del producto",
            },
            stock: {
              type: "number",
              description: "Stock del producto",
            },
            imageUrl: {
              type: "string",
              description: "Url de la imagen",
            },
            idCategory: {
              type: "number",
              description: "Id de la categoria",
            },
            brandId: {
              type: "number",
              description: "Id de la marca",
            },
          },
          example: {
            name: "Producto Ejemplo",
            description: "Celular alta gama",
            price: 100.5,
            stock: 50,
            imageUrl: "La url de la imagen",
            idCategory: 1,
            brandId: 1,
          },
        },
        Category: {
          type: "object",
          required: ["description"],
          properties: {
            description: {
              type: "string",
              description: "Descripcion de la categoria",
            },
          },
          example: {
            description: "Computadoras",
          },
        },
        Brand: {
          type: "object",
          required: ["description"],
          properties: {
            description: {
              type: "string",
              description: "Nombre de la marca",
            },
          },
          example: {
            description: "Tokio",
          },
        },
        Suppliers: {
          type: "object",
          required: ["name", "contactInfo"],
          properties: {
            name: {
              type: "string",
              description: "Nombre del proveedor",
            },
            contactInfo: {
              type: "string",
              description: "Contacto del proveedor"
            }
          },
          example: {
            name: "Proveedor SA",
            contactInfo: "0923455"
          },
        },
        Cart: {
          type: "object",
          required: ["userId", "productId", "quantity"],
          properties: {
            userId: {
              type: "number",
              description: "Id del usuario",
            },
            productId: {
              type: "number",
              description: "Id del producto"
            },
            quantity: {
              type: "number",
              description: "Cantidad de productos"
            },
            status: {
              type: "string",
              description: "Estado del carrito"
            }
          },
          example: {
            productId: 1,
            quantity: 1,
            status: "active"
          }
        },
        Inventory: {
          type: "object",
          required: ["productId", "quantity"],
          properties: {
            productId: {
              type: "integer",
              description: "ID del producto",
            },
            quantity: {
              type: "integer",
              description: "cantidad del producto",
            },
            movementType: {
              type: "string",
              description: "tipo movimiento",
            },
            description: {
              type: "string",
              description: "descripcion del producto",
            },
            movementDate: {
              type: "date",
              description: "fecha del movimiento",
            },
          },
          example: {
            productId: 1,
            quantity: 50,
            movementType: "Compra de productos",
            description: "compra de compus hp",
            movementDate: '2025-01-07', 
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], 
};
