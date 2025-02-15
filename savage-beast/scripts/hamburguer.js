const button=document.querySelector('#button1');
const target1=document.querySelector('.hamburguer-menu');
const target2=document.querySelector('.navbar');
const target3=document.querySelector('header');

button.addEventListener('click',()=>{
    target1.classList.toggle('show');
    target2.classList.toggle('show');
    target3.classList.toggle('show');
});
