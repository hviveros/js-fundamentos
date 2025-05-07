// Typecasting explícito
const integer = parseInt("42");
console.log(typeof integer); // number
const float = parseFloat("3.14");
console.log(typeof float); // number

// // Convertir binario a decimal: utilizando parseInt() con la base adecuada
const binary = "1010";
const decimal = parseInt(binary, 2);
console.log(decimal); // 10

// // Typecasting implícito
// // JS realiza conversiones de tipo sin intervención del programador
// Suma string con número
const resultado = "5" + 3;
console.log(resultado); // 53

// // Booleanos
const sumaConBoolean = "3" + true;
console.log(sumaConBoolean); // "3true"

const sumaConNumero = 2 + true;
console.log(sumaConNumero); // 3


// // Prueba
const numero = "596";
const numeroConvertido = parseInt(numero);
console.log(typeof numero); // string
console.log(typeof numeroConvertido); // number
