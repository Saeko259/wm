const openModal = document.querySelector('.click')
const openModal2 = document.querySelector('.click2')
const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const closeModal = document.querySelector('.modal_close')
const closeModal2 = document.querySelector('.modal_close2')

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

