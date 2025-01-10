const yearElement=document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearElement.textContent= `© ${currentYear} | Rommel Juarez | Quito-Ecuador 🇪🇨`;

const lastModifiedElement=document.getElementById("lastModified");
const lastModified= document.lastModified;
lastModifiedElement.textContent=`${lastModified}`;

const hambutton= document.querySelector(".nav-bar");

hambutton.addEventListener('click', ()=>{
hambutton.classList.toggle("show");
});