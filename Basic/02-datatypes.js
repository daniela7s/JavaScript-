//PRIMITIVOS

//String(cadena detexto)

let name = "Juan"
let alias="Juanito"
let email = "juanito@example.com"


//Numbers

let age = 30//entero
let height = 1.75//decimal
let weight = 70.5

//Booleanos (boolean)verdadero o falso - condicionale0s

let isTeacher = true
let isStudent = false

//Undefined

let undefinedValue
console.log(undefinedValue) //undefined no definido      //

//Null

let nullValue = null
console.log(nullValue) //null valor nulo

//Symbol: Valores únicos - id de propiedades

let mySymbol = Symbol("mySymbol")

//BigInt: Números enteros grandes

let bigIntValue = 1234567890123456789012345678901234567890n

//Mostrar los tipos de datos

console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isTeacher) //boolean
console.log(typeof undefinedValue) //undefined
console.log(typeof nullValue) //object
console.log(typeof mySymbol) //symbol
console.log(typeof bigIntValue) //bigint