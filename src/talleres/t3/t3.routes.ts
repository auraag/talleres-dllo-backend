import express from "express";
import { desglosarString, twoSum, conversionRomana, descomposicion } from "./t3.logic";

const router = express.Router();

/**
 * @openapi
 * /api/t3/desglosarString:
 *   post:
 *     summary: Cuenta la cantidad de vocales o consonantes en una cadena.
 *     tags:
 *       - Taller 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               str:
 *                 type: string
 *                 example: "Hola Mundo"
 *               tipo:
 *                 type: string
 *                 enum: [vocales, consonantes]
 *                 example: "vocales"
 *     responses:
 *       200:
 *         description: Cantidad de caracteres encontrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
router.post("/desglosarString", (req, res) => {
  const { str, tipo } = req.body;
  const resultado = desglosarString(str, tipo);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t3/twoSum:
 *   post:
 *     summary: Encuentra los índices de dos números cuya suma es igual al total.
 *     tags:
 *       - Taller 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeros:
 *                 type: array
 *                 items:
 *                   type: number
 *                 example: [2, 7, 11, 15]
 *               total:
 *                 type: number
 *                 example: 9
 *     responses:
 *       200:
 *         description: Índices de los números encontrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: array
 *                   items:
 *                     type: number
 */
router.post("/twoSum", (req, res) => {
  const { numeros, total } = req.body;
  const resultado = twoSum(numeros, total);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t3/conversionRomana:
 *   post:
 *     summary: Convierte un número romano a su valor decimal.
 *     tags:
 *       - Taller 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               romano:
 *                 type: string
 *                 example: "XIV"
 *     responses:
 *       200:
 *         description: Valor decimal equivalente del número romano.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
router.post("/conversionRomana", (req, res) => {
  const { romano } = req.body;
  const resultado = conversionRomana(romano);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t3/descomposicion:
 *   post:
 *     summary: Descompone una palabra según un diccionario de palabras.
 *     tags:
 *       - Taller 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               str:
 *                 type: string
 *                 example: "apple,app,le"
 *     responses:
 *       200:
 *         description: Devuelve la descomposición encontrada o un arreglo vacío.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.post("/descomposicion", (req, res) => {
  const { str } = req.body;
  const resultado = descomposicion(str);
  res.json({ resultado });
});

export default router;
