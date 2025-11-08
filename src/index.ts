import express from "express";
import t1Routes from "./talleres/t1/t1.routes";
import t2Routes from "./talleres/t2/t2.routes";
import t3Routes from "./talleres/t3/t3.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const PORT = 3000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API TALLER-4-V2',
            version: '1.0.0',
            description: 'API TALLER-4-V2',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'Servidor de desarrollo local'
            }
        ]
    },

    apis: [__dirname + "/talleres/**/*.ts"],

};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.use(express.json());

app.use("/api/t1", t1Routes);
app.use("/api/t2", t2Routes);
app.use("/api/t3", t3Routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
