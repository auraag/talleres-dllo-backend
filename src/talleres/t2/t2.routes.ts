import express from "express";
import { findMax, includes, sum, missingNumbers } from "./t2.logic";

const router = express.Router();

/**
 * @openapi
 * /api/t2/findMax:
 *   post:
 *     summary: Devuelve el número máximo de un arreglo.
 *     tags:
 *       - Taller 2
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
 *                 example: [1, 5, 3, 9, 2]
 *     responses:
 *       200:
 *         description: Número máximo encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
router.post("/findMax", (req, res) => {
  const { numeros } = req.body;
  const resultado = findMax(numeros);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t2/includes:
 *   post:
 *     summary: Verifica si un número está presente en un arreglo.
 *     tags:
 *       - Taller 2
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
 *                 example: [1, 2, 3, 4, 5]
 *               numero:
 *                 type: number
 *                 example: 3
 *     responses:
 *       200:
 *         description: Indica si el número está en el arreglo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: boolean
 */
router.post("/includes", (req, res) => {
  const { numeros, numero } = req.body;
  const resultado = includes(numeros, numero);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t2/sum:
 *   post:
 *     summary: Calcula la suma de todos los números en un arreglo.
 *     tags:
 *       - Taller 2
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
 *                 example: [2, 4, 6, 8]
 *     responses:
 *       200:
 *         description: Suma total de los números.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultado:
 *                   type: number
 */
router.post("/sum", (req, res) => {
  const { numeros } = req.body;
  const resultado = sum(numeros);
  res.json({ resultado });
});

/**
 * @openapi
 * /api/t2/missingNumbers:
 *   post:
 *     summary: Devuelve los números faltantes dentro del rango de un arreglo.
 *     tags:
 *       - Taller 2
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
 *                 example: [1, 2, 4, 6]
 *     responses:
 *       200:
 *         description: Lista de números faltantes en el rango.
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
router.post("/missingNumbers", (req, res) => {
  const { numeros } = req.body;
  const resultado = missingNumbers(numeros);
  res.json({ resultado });
});

export default router;
