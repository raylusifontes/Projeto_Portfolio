const nome = document.getElementById('input-nome');
const email = document.getElementById('input-email');
const nomeRe = document.getElementById('nome-required');
const emailRe = document.getElementById('email-required');
const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault()

    let war1 ="";
    let war2 = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    nomeRe.textContent ="";
    emailRe.textContent ="";

    if(nome.value.length <2){
        war1 +='Nome é requerido!';
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        war2 +='Email é requerido!';
        entrar = true;
    }

    if(entrar){
        nomeRe.textContent = war1;
        emailRe.textContent = war2;
    }
});