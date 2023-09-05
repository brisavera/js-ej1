//ej 1-

const parOImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log("El numero  es Par!");
  } else {
    console.log("El numero  es impar!");
  }
};
//parOImpar(32);
//parOImpar(33);

//ej 2-
const mayorMenor = (a, b) => {
  if (a > b) {
    console.log("El numero ${a} es mayor que ${b}");
  } else if (a < b) {
    console.log("El numero ${b} es mayor que ${a}");
  } else {
    console.log("Los numeros son iguales");
  }
};

//mayorMenor(5, 10);
//mayorMenor(5, 2);
//mayorMenor(10, 10);

//ej 3;
const multiploCin = (numero) => {
  if (numero % 5 === 0) {
    console.log("El numero (${numero}) es multiplo de 5");
  } else {
    console.log("El numero (${numero}) no es multiplo de 5");
  }
};
//multiploCin(25);
//multiploCin(98);

//ej 4;

const imprimNumeros = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};
//imprimNumeros(5);

//ej 5;
const imprimPalabra = (palabra, n) => {
  for (let i = 0; i < n; i++) {
    console.log(palabra);
  }
};
//imprimPalabra("Brisa", 10);

//ej 6;
const imprimArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
//imprimArray(arr);

//ej7;

const imprimArraySinCinco = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(array[i]);
  }
};

//imprimArraySinCinco([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//ej8;

const multArray = (array, n) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * n);
  }
};
//multArray([1, 2, 3, 4, 5, 6, 7, 8], 2);
