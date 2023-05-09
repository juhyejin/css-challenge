const menuIconEl = document.querySelector('.menu-icon')
const mainCardEl = document.querySelector('.main-card')
const menuEl = document.querySelector('.menu')
const inputEl = document.querySelector('.search-input')
const searchIconEl = document.querySelector('.search-icon')

menuIconEl.addEventListener('click',() => {
  mainCardEl.classList.toggle('active');
  menuEl.classList.toggle('show-menu')
})
searchIconEl.addEventListener('click',()=>{
  inputEl.classList.toggle('active')
})