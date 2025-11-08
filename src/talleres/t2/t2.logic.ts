/**
 * Encuentra y devuelve el número máximo dentro de un arreglo de números.
 * @param numeros El arreglo de números a analizar.
 * @returns El número máximo.
 */
export function findMax(numeros: number[]): number {
  // Manejo de caso borde: si el arreglo está vacío, se podría lanzar un error o devolver un valor especial (por ejemplo, Number.NEGATIVE_INFINITY)
  if (numeros.length === 0) {
    throw new Error("El arreglo no puede estar vacío.");
  }

  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}

// ----------------------------------------------------------------------

/**
 * Verifica si un número está incluido en un arreglo de números.
 * @param numeros El arreglo de números a buscar.
 * @param numero El número a verificar.
 * @returns true si el número está en el arreglo, false en caso contrario.
 */
export function includes(numeros: number[], numero: number): boolean {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return true;
    }
  }
  return false;
  // Alternativa más concisa en TS/JS moderno: return numeros.includes(numero);
}

// ----------------------------------------------------------------------

/**
 * Calcula la suma total de todos los números en un arreglo.
 * @param numeros El arreglo de números a sumar.
 * @returns La suma de todos los elementos.
 */
export function sum(numeros: number[]): number {
  let totalSum = 0; // Se renombra la variable a 'totalSum' para evitar la confusión con el nombre de la función 'sum'.
  for (let i = 0; i < numeros.length; i++) {
    totalSum += numeros[i];
  }
  return totalSum;
  // Alternativa más concisa en TS/JS moderno: return numeros.reduce((acc, current) => acc + current, 0);
}

// ----------------------------------------------------------------------

/**
 * Encuentra los números faltantes entre el valor mínimo y máximo
 * del arreglo original (excluyendo el mínimo y el máximo).
 * @param numeros El arreglo de números (asume que no está vacío).
 * @returns Un arreglo con los números faltantes en el rango [min + 1, max - 1].
 */
export function missingNumbers(numeros: number[]): number[] {
  if (numeros.length === 0) {
    return [];
  }

  // Se utilizan métodos más eficientes para encontrar min/max en lugar del bucle manual
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  
  // Se utiliza un Set para una búsqueda O(1) más rápida en lugar del bucle anidado O(n^2)
  const setNumeros = new Set(numeros);

  const faltantes: number[] = [];
  // Recorremos el rango entre el mínimo y el máximo
  for (let i = min + 1; i < max; i++) {
    if (!setNumeros.has(i)) {
      faltantes.push(i);
    }
  }

  return faltantes;
}