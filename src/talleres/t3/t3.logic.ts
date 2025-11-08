// src/talleres/t3/t3.logic.ts

export function desglosarString(str: string, tipo: string): number {
  const vocales = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const esVocal = vocales.includes(char);

    if (tipo === "vocales" && esVocal) {
      count++;
    } else if (tipo === "consonantes" && !esVocal && /[a-zA-Z]/.test(char)) {
      count++;
    }
  }

  return count;
}

export function twoSum(numeros: number[], total: number): number[] {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] + numeros[j] === total) {
        return [i, j];
      }
    }
  }
  return [];
}

export function conversionRomana(romano: string): number {
  const valores: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < romano.length; i++) {
    const valorActual = valores[romano[i]];
    const valorSiguiente = valores[romano[i + 1]];

    if (valorSiguiente > valorActual) {
      total += valorSiguiente - valorActual;
      i++;
    } else {
      total += valorActual;
    }
  }

  return total;
}

export function descomposicion(str: string): string[] {
  const palabras = str.split(",");
  const palabraAdescomponer = palabras[0];
  const diccionario = palabras.slice(1);

  for (const palabra of diccionario) {
    if (palabraAdescomponer.startsWith(palabra)) {
      const resto = palabraAdescomponer.substring(palabra.length);
      if (diccionario.includes(resto)) {
        return [palabra, resto];
      }
    }
  }

  return [];
}
