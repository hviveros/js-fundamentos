// Tipo de dato: String
let string1 = 'Hola Mundo';
let string2 = "JavaScript es genial";

// Concatenar
let string3 = 'Hola Mundo';
let string4 = 'JavaScript es genial';
let concatenado = string3 + " " + string4;
console.log(concatenado);

let nombre = 'Mundo';
let saludo = `Hola ${nombre}, JavaScript es genial`;
console.log(saludo)

// Manipular strings
let frase = 'JavaScript es extremadamente genial';

// Longitud
console.log(frase.length); // Imprime 35
// Convertir a mayúsculas/minúsculas
console.log(frase.toLowerCase()); // Imprime todo en minúsculas
console.log(frase.toUpperCase()); // Imprime todo en mayúsculas
// Extraer subcadenas
let subCadena = frase.substring(0, 10);
console.log(subCadena); // Imprime "JavaScript"
