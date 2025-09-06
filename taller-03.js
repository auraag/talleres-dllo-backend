function desglosarString(str, tipo) {
  const vocales = 'aeiouAEIOU';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const esVocal = vocales.includes(char);

    if (tipo === 'vocales' && esVocal) {
      count++;
    } else if (tipo === 'consonantes' && !esVocal) {
      count++;
    }
  }

  return count;
}
  
function twoSum(numeros, total) {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] + numeros[j] === total) {
        return [i, j];
      }
    }
  }
  return [];
}

function conversionRomana(romano) {
  const valores = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
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

function descomposicion(str) {
  const palabras = str.split(',');
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
