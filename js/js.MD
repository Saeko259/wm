# JS


````javascript
let arreglo = ['Fantasma', ' Juan', 'Mateo', 'Sergio', 'Esteban']

let resultado = arreglo.map((item, index) => { // haciendo esto, clonamos el arreglo original, y a cada objeto le agregamos un Hola
    return `${index}${item} Hola`// Orden o manera en el cual se copia cada elemento
})

console.log(resultado)

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let resultado2 = numeros.filter((item) => item >= 5 && item <= 11)

console.log(resultado2)
````