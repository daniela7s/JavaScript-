// 1. Comentario en una linea

/* 2. Comentario en varias lineas */

//3 declara vars datos primitivos

let nombre = "Joselin"
let edad = 17
let estudiante = true
let vocacion
let nullValue = null
let mascota = Symbol("banjito")
let pi = 3.141658888888888888855559385095555

//4 imprimir en consola

console.log(nombre)
console.log(edad)
console.log(estudiante)
console.log(vocacion)
console.log(nullValue)
console.log(mascota)
console.log(pi)

//4 imprimir tipos
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof estudiante)
console.log(typeof vocacion)
console.log(typeof nullValue)
console.log(typeof mascota)
console.log(typeof pi)

//6 modifica valores mismo tipo
nombre = "Daniela"
console.log(nombre)

edad= 16+1
console.log(edad)

estudiante = false
console.log(estudiante)

vocacion
console.log(vocacion)


nullValue = null
console.log(nullValue)

mascota = Symbol("pony")
console.log(mascota)

pi= 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450
console.log(pi)

//7 modifica valores distinto tipo
nombre = 123
console.log(nombre)

edad = "diecisiete"
console.log(edad)

estudiante = "si"
console.log(estudiante)

vocacion = 123
console.log(vocacion)

nullValue = "nulo"
console.log(nullValue)

mascota = "loro"
console.log(mascota)

pi = "circunferencia y diametro"
console.log(pi)

//8 constantes primitivos

const name1 = "Joselin"
const edad1 = 17
const estudiante1 = true
const vocacion1 = undefined
const nullValue1 = null
const mascota1 = Symbol("banjito")
const pi1 = 3.141658888888888888855559385095555

//9modificar constante valores


name1= "Daniela"
console.log(name1) //error, no se reasigna const//

//10 comentar lineas que produzcan error//
