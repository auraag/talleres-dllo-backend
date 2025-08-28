function findMax(numeros) {
  let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
        max = numeros[i];
        }
    }
    return max;
}

function includes(numeros, numero) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return true;
    }
  }
  return false;
}

function sum(numeros) {
  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}

function missingNumbers(numeros) {
  let min = numeros[0];
  let max = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }

  const faltantes = [];
  for (let i = min + 1; i < max; i++) {
    let esta = false;
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[j] === i) {
        esta = true;
        break; 
      }
    }
    if (!esta) {
      faltantes.push(i);
    }
  }
  return faltantes;
}
