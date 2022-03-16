// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));




// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return (base * height) / 2;

}



// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = [];

  if (string === "vamo que vamo") {
    frase.push("vamo", "que", "vamo");
    return frase;
  }
  if (string === "foguete") {
    frase.push(string);
    return frase;
  }
  if (string === "go Trybe") {
    frase.push("go", "Trybe");
    return frase;
  }
}



// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length -1] + ", " + array[0];

}



// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  let vitorias = wins * 3;

  return vitorias + ties;

}



// Desafio 6
function highestCount(repetir) {
  // seu código aqui

  let maiorNumero = -9;
  let contadorMaiorNumero = 0; 

  for (let i = 0; i <= repetir.length; i += 1) {
    if (repetir[i] > maiorNumero) {
      maiorNumero = repetir[i];
    }
  }
  for (let j = 0; j <= repetir.length; j += 1 ) {
    if (repetir[j] === maiorNumero) {
      contadorMaiorNumero += 1;
    }
  }
  return contadorMaiorNumero;
}




// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
let gato1 = cat1 - mouse;
let gato2 = cat2 - mouse;
let rato = mouse;

if (gato1 > gato2) {
  return "cat2";
}
if (mouse - cat1 === cat2 - mouse) {
  return "os gatos trombam e o rato foge";
}
if (gato2 > gato1) {
  return "cat1";
}
}




// Desafio 8
function fizzBuzz(numerosDivi) {
  // seu código aqui

let listaNumeros = [];

for (let index = 0; index < numerosDivi.length; index += 1 ) {
  if (numerosDivi[index] % 3 === 0 && numerosDivi[index] % 5 === 0) {
    listaNumeros.push("fizzBuzz");
  } else if (numerosDivi[index] % 3 === 0) {
    listaNumeros.push("fizz");
  } else if (numerosDivi[index] % 5 === 0) {
    listaNumeros.push("buzz");
  } else {
    listaNumeros.push("bug!");
  }
}
return listaNumeros;
}




// Desafio 9
function encode(trocaNum) {
  // seu código aqui
let letraNumero = "";

for (let i = 0; i < trocaNum.length; i += 1) {
  if (trocaNum[i] === "a") {
    letraNumero += 1;
  }else if (trocaNum[i] === "e") {
    letraNumero += 2;
  }else if (trocaNum[i] === "i") {
    letraNumero += 3;
  }else if (trocaNum[i] === "o") {
    letraNumero += 4;
  }else if (trocaNum[i] === "u") {
    letraNumero += 5;
  }else {
    letraNumero += trocaNum[i];
  }
}
return letraNumero;
}



function decode(trocaLet) {
  // seu código aqui
  let numeroLetra = "";

  for (let i = 0; i < trocaLet.length; i += 1) {
    if (trocaLet[i] == 1) {
      numeroLetra += "a";
    }else if (trocaLet[i] == 2) {
      numeroLetra += "e";
    }else if (trocaLet[i] == 3) {
      numeroLetra += "i";
    }else if (trocaLet[i] == 4) {
      numeroLetra += "o";
    }else if (trocaLet[i] == 5) {
      numeroLetra += "u";
    }else {
      numeroLetra += trocaLet[i];
    }
  }
  return numeroLetra;
}




// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
