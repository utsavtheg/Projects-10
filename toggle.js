const container = document.querySelector(".container");
const btn = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  container.classList.toggle("collapsed");
});

btn.addEventListener('click',() => {
  document.body.classList.toggle("active");
 
});
