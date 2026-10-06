//Condicionales
//Se toman desiciones segun lo que ocurre

//if, else, else if

//IF: si

let age= 29

 //if (condition) {
    //codigo a ejecutar si la condicion es verdadera}


if (age >= 18) {
    console.log("Eres mayor de edad")
}

// ELSE IF: mas condiciones: else if b(si,no si )

if (age >= 18) { console.log("Eres mayor de edad") }
else if (age < 18 && age <= 13) { console.log("Eres un niño/niña") }
else { console.log("Eres un niño") }

//ELSE (Cierre de la condicion) si no se cumple ninguna de las condiciones anteriores

if (age >= 18) { console.log("Eres mayor de edad") }
else if (age < 18 && age >= 13) { console.log("Eres un adolescente")} 
else { console.log("Eres adolescente") }

//ej

let edad= 19

if (edad >= 18) { console.log("Acceso permitido") } else if (edad < 18 && edad >= 13) { console.log("Acceso denegado") } else { console.log("Acceso denegado") }


//ej 2

let estaLloviendo = false;


if (estaLloviendo ==true){console.log ("esta lloviendo, saca la sombrilla")} else if (estaLloviendo==false){console.log("No esta lloviendo, no saque la sombrilla")}

/*Op ternario
Evalua dos condiciones, es un if y un if else compara true or false*/

let años= 20

 const mensaje=años>18 ? ("es mayor de edad") : ("es menor de edad")

///izq true -der false
console.log(mensaje)


//switch: Alternativa a if, else if
//comparar una variable con muchos valores posibles


let day = 7
let dayName 

switch (day) {
    case 0:
        dayName ="lunes"
        break
    case 1: 
        dayName= "martes"   
        break           
    case 2:
    dayName= "miercoles" 
    break   
    case 3:
    dayName= "jueves"   
    break
    case 4:
    dayName= "viernes"
    break
    case 5:
    dayName= "sabado"
    break
    case 6:
    dayName= "domingo"
    break
    default:
    dayName= "Dia no valido"} 

console.log(dayName)