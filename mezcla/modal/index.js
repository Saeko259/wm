const openModal = document.querySelector('.click')
const openModal2 = document.querySelector('.click2')
const openModal3 = document.querySelector('.click3')
const openModal4 = document.querySelector('.click4')
const openModal5 = document.querySelector('.click5')
const openModal6 = document.querySelector('.click6')
const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')
const modal4 = document.querySelector('.modal4')
const modal5 = document.querySelector('.modal5')
const modal6 = document.querySelector('.modal6')
const closeModal = document.querySelector('.modal_close')
const closeModal2 = document.querySelector('.modal_close2')
const closeModal3 = document.querySelector('.modal_close3')
const closeModal4 = document.querySelector('.modal_close4')
const closeModal5 = document.querySelector('.modal_close5')
const closeModal6 = document.querySelector('.modal_close6')

openModal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.add('modal--show')
})


closeModal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('modal--show')
})


openModal2.addEventListener('click', (e)=>{
    e.preventDefault()
    modal2.classList.add('modal2--show')
})

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault()
    modal2.classList.remove('modal2--show')
})

openModal3.addEventListener('click', (e)=>{
    e.preventDefault()
    modal3.classList.add('modal3--show')
})

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault()
    modal3.classList.remove('modal3--show')
})

openModal4.addEventListener('click', (e)=>{
    e.preventDefault()
    modal4.classList.add('modal4--show')
})

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault()
    modal4.classList.remove('modal4--show')
})

openModal5.addEventListener('click', (e)=>{
    e.preventDefault()
    modal5.classList.add('modal5--show')
})

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault()
    modal5.classList.remove('modal5--show')
})

openModal6.addEventListener('click', (e)=>{
    e.preventDefault()
    modal6.classList.add('modal6--show')
})

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault()
    modal6.classList.remove('modal6--show')
})
