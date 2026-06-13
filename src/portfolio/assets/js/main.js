const a = document.querySelector(".is-hunberger");
const b = document.querySelector(".l-nav-sp");
const c = document.querySelector(".p-top");

a.addEventListener("click",  ()=> {
  b.classList.toggle('is-hidden'); 
  c.classList.toggle('is-fixed'); 
});
