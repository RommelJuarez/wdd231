const hambutton= document.querySelector(".hm");
const nav=document.querySelector(".nav-buttons");

hambutton.addEventListener('click', ()=>{
nav.classList.toggle("show");
hambutton.classList.toggle("show");
});