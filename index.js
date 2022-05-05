let form = document.querySelector('.form-container');
let log = document.querySelector('.log');


form.addEventListener('submit', ()=>{
    log.textContent = confirm("Do you want to submit the form?");
    log.textContent = alert("Your form has been successfully submitted, Thank.")
});


let burger = document.querySelector('.burger');
let navbar = document.querySelector('.nav-container');
let itemlist = document.querySelector('.item-list');
let rightnav = document.querySelector('.right-nav');
let home = document.querySelector('.home')


burger.addEventListener('click', ()=>{
    itemlist.classList.toggle('visible-cl');
    rightnav.classList.toggle('visible-cl');
    navbar.classList.toggle('nav-h');
    home.classList.toggle('home::before');
});

