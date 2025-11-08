import express from "express";
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "./t1.logic";

const router = express.Router();

/**
 * @openapi
 * /api/t1/convertidorTemp:
 *   post:
 *     summary: Convierte temperatura de Celsius a Fahrenheit.
 *     tags:
 *       - Taller 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tempC:
 *                 type: number
 *                 example: 25
 *     responses:
 *       200:
 *         description: Temperatura convertida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
router.post("/convertidorTemp", (req, res) => {
  const { tempC } = req.body;
  const resultado = convertidorTemp(tempC);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t1/resolvedor:
 *   post:
 *     summary: Resuelve ecuaciones cuadráticas según la opción (+ o -).
 *     tags:
 *       - Taller 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *                 example: 1
 *               b:
 *                 type: number
 *                 example: -3
 *               c:
 *                 type: number
 *                 example: 2
 *               opcion:
 *                 type: string
 *                 example: "+"
 *     responses:
 *       200:
 *         description: Resultado de la ecuación cuadrática.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
router.post("/resolvedor", (req, res) => {
  const { a, b, c, opcion } = req.body;
  const resultado = resolvedor(a, b, c, opcion);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t1/mejorParidad:
 *   post:
 *     summary: Verifica si un número es par (método directo).
 *     tags:
 *       - Taller 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num:
 *                 type: number
 *                 example: 10
 *     responses:
 *       200:
 *         description: Devuelve true si es par, false si no.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: boolean
 */
router.post("/mejorParidad", (req, res) => {
  const { num } = req.body;
  const resultado = mejorParidad(num);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t1/peorParidad:
 *   post:
 *     summary: Verifica si un número es par (método iterativo).
 *     tags:
 *       - Taller 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num:
 *                 type: number
 *                 example: 7
 *     responses:
 *       200:
 *         description: Devuelve true si es par, false si no.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: boolean
 */
router.post("/peorParidad", (req, res) => {
  const { num } = req.body;
  const resultado = peorParidad(num);
  res.json({ resultado });
});

export default router;
