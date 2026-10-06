//BUCLES: Repetición de bloques código varias veces.

//for: se repite un bloque de código un número determinado de veces

for (let i = 0; i < 5; i++) {
    console.log(`Hola mundo ${i}`)
}


for (let i = 0; i <=5; i++) {
    console.log(`Hola mundo ${i}`)
}


//ej 2

const numeros = [1, 2, 3, 4, 5]
for(let i=0; i<numeros.length; i++){
    console.log(`Numero: ${numeros[i]}`)
}


//WHILE - MIENTRAS SEA CIERTO
let numero =1
while(numero<=5){console.log(numero)
    numero++
}

let password ="1234"

//while(condition) { what happens}

while(password!==1234){
    console.log("acceso permitido")
}


//DO WHILE: SE REPITE AL MENOS 1 VEZ

let nummero = 10

do{
    console.log(numero)
    numero++
} while(numero<=5)
