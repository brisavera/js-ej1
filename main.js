 
 //ej 1.
 let numeroParoImpar = 3

 const parOImpar = (n) => {
if (n%2===0) {
    console.log('El numero del ejercicio 1 es Par!') 
} else{
    console.log('El numero del ejercicio 1 es impar!')
}
 }
 parOImpar(numeroParoImpar)

 //ej 2-

let numeroEj2A = 45;
let numeroEj2B = 45;

const numeroMayorMenor = (n1,n2)=> {
if (n1===n2) {
   return console.log('Los numeros del ejercicio dos son iguales')
} else if (n1 > n2) {
     return console.log('El primer numero ingresado es mayor al segundo')
    
} else {
    return console.log('El segundo numero ingresado es mayor al primero')
}
};
numeroMayorMenor(numeroEj2A,numeroEj2B)


//ej 3-
let nMultiplo = 17;

const esMultiploDe5 = (n) => {
    if (n%5===0) {
        return console.log(`El numero ${n} es multiplo de 5`)
    } else {
        return console.log(`El numero ${n} NO es multiplo de 5`)
    }
}
esMultiploDe5(nMultiplo)

//ej 4-

let numeroQueParaElCiclo = 4;

const contador = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
    return
}
contador(numeroQueParaElCiclo)

//ej 5-

let palabraCiclica = 'pato';
let numeroDevecesQueDigoLaPalabra = 5
const imprimirPalabra = (n,palabra) => {
    for (let i = 1; i <= n; i++) {
      console.log(palabra)
    }
    return
}
imprimirPalabra(numeroDevecesQueDigoLaPalabra,palabraCiclica)

//ej 6-
 let arrayARecorrer = [1,2,'pato',true, 'comosiama']

 const imprimirValoresArray = (array) => {
    array.forEach((i, index) => {
console.log(`En el indice ${index} hay el siguiente valor: ${i}`)        
    });
 }
 imprimirValoresArray(arrayARecorrer)

 //ej 7

 let arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10]

 const saltearEl5 = (array) => {
    for (let i = 0; i < array.length; i++) {
       if (i === 5) {
        continue
       }
        console.log(array[i])
    }
 }
 saltearEl5(arrayDeNumeros)

 //ej 8 - 

 let arrayDeNumerosParaMultiplicar = [1,2,3,4,5,6,7,8,9,10]
 let multiplo = 8

 const multiplicarIndicesArray = (array, n) => {
    array.forEach((e) =>{
        console.log(`${e} x ${n} = ${e*n}`)
    })
 }
 multiplicarIndicesArray(arrayDeNumerosParaMultiplicar, multiplo)