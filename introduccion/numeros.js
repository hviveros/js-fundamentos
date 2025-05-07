// Enteros y decimales
let entero = 42;
let decimal = 3.14;
console.log(typeof entero); // "number"
console.log(typeof decimal); // "number"

// Notación científica
let cientifico = 5e3; // equivale a 5000
console.log(cientifico);

// Infinity y NaN
let infinito = Infinity;
let noNumero = NaN;
console.log(infinito, noNumero);

// Operaciones básicas
// +, -, *, /
// Operaciones avanzadas
// Módulo (%): Retorna el residuo de una división entre dos números. Útil para saber si un número es múltiplo de otro.
let modulo = 10 % 3; // resultado es 1
console.log(modulo);

// Exponenciación ()**: Eleva un número a una potencia específica.
let potencia = 2 ** 3; // equivale a 8
console.log(potencia);

// Dilemas con la precisión
// Puede dar resultados muy largos, para redondear se usa .toFixed()
let precision = 0.1 + 0.2;
console.log(precision.toFixed(2)); // "0.30"

// Math
// Raíz cuadrada (Math.sqrt): Calcula la raíz cuadrada de un número.
let raizCuadrada = Math.sqrt(16); 
console.log(raizCuadrada);// 4

// Valor absoluto (Math.abs): Devuelve el valor absoluto de un número.
let valorAbsoluto = Math.abs(-7); 
console.log(valorAbsoluto); // 7

// Número aleatorio (Math.random): Genera un número aleatorio entre 0 y 1.
let aleatorio = Math.random();
console.log(aleatorio);
