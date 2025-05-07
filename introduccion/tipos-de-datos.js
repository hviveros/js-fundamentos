// ## PRIMITIVOS ##
// String: Cadenas de texto encerradas en comillas simples o dobles. Ejemplo:
let nombre = 'tere';

// Number: Datos numéricos que permiten representar valores enteros o decimales. Ejemplo:
let edad = 25;

// Boolean: Son valores lógicos que solamente pueden ser true o false. Ideal para verificar condiciones. Ejemplo:
let esMayorDeEdad = true;

// Null: Representa intencionalmente la ausencia de un valor. Es útil para señalar que una variable está vacía. Ejemplo:
let sinValor = null;

// Undefined: Indica que una variable ha sido declarada pero no tiene un valor asignado. Generalmente asignado por JavaScript.
let sinDefinir;

// Symbol: Ofrece valores únicos, ideales para identificar propiedades de objetos de manera única. Ejemplo:
let idUsuario = Symbol('único');

// BigInt: Permite representar números enteros grandes más allá de Number.MAX_SAFE_INTEGER. Ejemplo:
let numeroGrande = 9007199254740991n;

// ## COMPLEJOS ##
// Objetos (Object): Permiten almacenar datos como pares clave-valor. Ideal para representar entidades. Ejemplo:
let carro = {
  marca: 'Tesla',
  modelo: 'Model S'
};

// Arrays: Útiles para almacenar listas de valores. Pueden contener cualquier tipo de dato y son extensibles. Ejemplo:
let frutas = ['manzana', 'banano', 'uvas'];

// Funciones (Function): Bloques de código reutilizables que ejecutan una tarea específica. Ejemplo de declaración:
function saludar(nombre) {
  console.log('Hola ' + nombre);
}
