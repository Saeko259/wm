//Accedemos segun el css (me refiero al query selector)
//const documento = document.getElementsByClassName("cuadro ")
//console.log(documento)
//Accedemos segun su id
//const input = document.getElementById("input1")
//console.log(input)
//seleccionamos todos los elementos de clase input, por esto el #
//const input = document.querySelectorAll('#input')
/* const cuadro = document.querySelector('.cuadro')
const lista = document.getElementById('lista')
//accedemos al css del cuadro
cuadro.style.backgroundColor = 'green';
//Texto adentro de la lista, de manera textual
console.log(lista.innerText);
//el contenido textual y como esta estructurado
console.log(lista.textContent);
//el html
console.log(lista.innerHTML);

const titulo = document.getElementById('titulo')
titulo.innerHTML = 'Hola'

//funcion
lista.onclick = () => {
    lista.innerText=''

}

const enlace = document.getElementsByTagName('a')
//El enlace[0] indica que va a buscar el primero enlace que encuentre, y de vuelve el valor del atributo href
console.log(enlace[0].getAttribute('href'))
console.log(enlace[0].setAttribute('href', 'https://www.youtube.com/')) */

/* const cuadro = document.querySelector('.cuadro') */
/* Accedes a las clases del cuadro y con el add le agregas una clase  */
/* cuadro.classList.add('circulo') */
//Verifica si una clase se encuentra en un objeto
/* cuadro.classList.contains('cuadro')
cuadro.classList.remove('cuadro') */

//const cuadro = document.querySelector('.cuadro')
//Crea un nuevo elemento, especificamente una lista
//const listanueva = document.createElement('ul')
//Le adjuntamos el elemento que creamos por medio del append
//listanueva.innerHTML = '<li>hola</li>'
//listanueva.classList.add('circulo', 'tamaño')
//por comas puedes separar atributos
//listanueva.setAttribute('id', 'listanueva', 'href', 'https://www.youtube.com/')

/* listanueva.onclick = () => {
    listanueva.innerText=''
} */
//cuadro.append(listanueva)

const cuadro = document.getElementById('cuadro')
const input = document.getElementById('input1')

//La estructura de html que tenga el objeto
console.log(cuadro.parentElement)
//Los atributos que tenga el objeto
console.log(cuadro.parentNode)
//Nos muestra los items que esten adentro de la estrucutra, en forma de lista textual
console.log(cuadro.children)

//Los eventos hacen referencia que va a hacer el usuario con el proyecto en si.

/* function mostrarClick(parametro) {
     console.log("Click")
     if ( parametro == 1){
        input.classList.add('circulo')
        input.classList.remove('triangulo')
        input.classList.remove('cuadrado')
     }else if(parametro == 2) {
        input.classList.add('cuadrado')
     } else if (parametro == 3){
        input.classList.add('triangulo')
        input.classList.remove('circulo')
        input.classList.remove('cuadrado')

     } 
} */


/* const lista = document.getElementById("lista")
const frutas = document.getElementById('frutas')

function mostrarClick(topping){
    var children = lista.children
    var index = 0
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        if (element == topping.target) index = i
    }
    console.log(index)
}


lista.childNodes.forEach(element => {
    element.addEventListener('click',mostrarClick)
}) */
