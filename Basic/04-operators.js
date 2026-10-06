//Operadores aritmeticos

let a = 5
let b = 10

console.log(a+b) //suma
console.log(a-b) //resta
console.log(a*b) //multiplicación
console.log(a/b) //división

console.log(a%b) //módulo(residuo división)
console.log(a ** b) //exponente

a++ //Incremento
console.log(a)

b-- // Decremento
console.log(b)


//  Operadores de asignacion
let myVariable = 2
console.log(myVariable)

myVariable += 3 // suma con asignacion
console.log(myVariable)

myVariable -= 1 // 
console.log(myVariable)

myVariable *= 2 // multiplicacion con asignacion

myVariable /= 2 // division con asignacion

myVariable %= 2 // modulo con asignacion


//Uso
let total = 0
//blusa
total=total +60000
//pantalon
total=total +150000

total-= 60000//blusa

let stock = 50

stock = stock-3

stock -= 3


// Op de comparacion

// Operadores de comparacion

a=10
b=5

console.log(a>b)  // Mayor que

console.log(5 > 10)  // Mayor que
console.log(5 < 20)  // Menor que
console.log(5 >= 20) // Mayor o igual que
console.log(5 <= 20) // Menor o igual que
console.log(5 == 20) // Igualdad
console.log(5 < 20)  // Menor que
console.log(5 < 20)  // Menor que
console.log(5 < 20)  // Menor que


// Cosas raras del leguaje
console.log(0 == false)         // true  (0 se convierte a booleano falso en comparaciones débiles)
console.log(1 == false)         // false
console.log(2 == false)         // false
console.log(0 == "")            // true  (una cadena vacía se convierte a 0)
console.log(0 == " ")           // true  (una cadena con solo espacios también se convierte a 0)
console.log(0 == '')            // true  (lo mismo usando comillas simples)
console.log(0 == "Hola")        // false ("Hola" no se puede convertir a un número válido)
console.log(0 === "")           // false (el operador === compara valor y tipo sin convertir nada)
console.log(undefined == null)  // true  (por especificación de JavaScript, se consideran equivalentes con ==)
console.log(undefined === null) // false (son tipos de datos diferentes)


//operadores logicos

// and (&&)
// Si por lo menos una de las comparaciones es falsa toda la expresion es falsa
console.log("Operadores logicos")
console.log(5 > 10 && 15 > 20) // False
console.log(5 < 10 && 15 > 20) // False
console.log(5 < 10 && 15 < 20) // True
console.log(5 < 10 && 15 < 20 && 1 < 10 && 10 > 50) // false


// not (!)
console.log("negacion")
console.log("-------------")
console.log(!true)       // false
console.log(!false)      // true
console.log(!(5 < 10))   // false (ya que 5 < 10 es true, y al negarlo cambia a false)

// Ejemplo de lógica del final de la imagen:
// password
// !password = no inicie sesion
