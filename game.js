const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.navlist');

hamburger.addEventListener('click', ()=>{
  
  list.classList.toggle('navlist-active')
})