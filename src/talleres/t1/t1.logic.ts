// src/talleres/t1/t1.logic.ts

export function convertidorTemp(tempC: number): number {
  return tempC * (9 / 5) + 32;
}

export function resolvedor(a: number, b: number, c: number, opcion: string): number {
  let x: number;

  if (opcion === "+") {
    x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  } else {
    x = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  }

  return x;
}

export function mejorParidad(num: number): boolean {
  return num % 2 === 0;
}

export function peorParidad(num: number): boolean {
  let detener = false;
  let respuesta = false;

  while (!detener) {
    num -= 2;
    if (num === 0) {
      detener = true;
      respuesta = true;
    } else if (num < 0) {
      detener = true;
      respuesta = false;
    }
  }

  return respuesta;
}
