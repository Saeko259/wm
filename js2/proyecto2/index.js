
const botonc = document.getElementById('boton-color')
const botonce = document.getElementById('boton-color-especifico')
const botontf = document.getElementById('boton-tipo-fuente')
const botontmf = document.getElementById('boton-tamaño-fuente')
const botoncf = document.getElementById('boton-color-fuente')
const botone = document.getElementById('boton-explosivo')

// Guardar el codigo de los colores
const color = document.getElementById('color')
const ce = document.getElementById('color-especifico')
const tf = document.getElementById('tipo-fuente')
const tfu = document.getElementById('tamaño-fuente')
const cf = document.getElementById('color-fuente')
const e = document.getElementById('explosivo')

//funion de cambio de color
function generarColorHexAleatorio(){
    //Almacena todos los digitos Hexadecimales posibles
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'

    //ciclo repetitivo para randomizar el Hexadecimal
    for(let i=0; i<6;i++){
        //Asigna los numeros aleatorios de manera aleatoria
        let indeceAleatorio = Math.floor(Math.random()*16)
        colorHex += digitos[indeceAleatorio]
    }

    return colorHex
}

botonc.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio()
    color.textContent = colorAleatorio
    document.body.style.backgroundColor = colorAleatorio
})

botonce.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio()
    ce.textContent = colorAleatorio
    document.body.children[1].style.backgroundColor = colorAleatorio
})


function cambiofuente()
{
    fuentes = ['Arial','Courier New','Georgia','Times New Roman','Trebuchet MS','Verdana']

    let index = Math.floor(Math.random()*6)
    let fuenteescogida = fuentes[index]

    return fuenteescogida
}

botontf.addEventListener('click',function(){
    fuente = cambiofuente()
    tf.innerText = fuente
    document.body.style.fontFamily = fuente

})

function tamañofuente(){
    let digito = Math.floor(Math.random()*40)+10
    let tamaño = digito + "px"

    return tamaño
}

botontmf.addEventListener('click', function(){
    let tamaño = tamañofuente()
    tfu.innerText = tamaño
    document.body.style.fontSize = tamaño
    
})

botoncf.addEventListener('click', function(){
    let color = generarColorHexAleatorio()
    cf.innerText = color
    document.body.style.color = color
} )

botone.addEventListener('click', function(){
    let tamaño = '1000px'
    e.innerText = tamaño
    document.body.style.fontSize = tamaño
    
})