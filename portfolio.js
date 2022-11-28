const botao1 = document.getElementById('botao1');
const link1 = document.getElementById('link1');
const botao2 = document.getElementById('botao2');
const link2 = document.getElementById('link2');

const callApi1 = () => {
    fetch('https://api.github.com/users/raylusifontes/repos')
        .then(resp => resp.json())
        .then(data => {
            let novaData = data;
    
        link1.textContent = novaData[4].clone_url;
        })
    }
    
botao1.addEventListener('click', callApi1);

const callApi2 = () => {
    fetch('https://api.github.com/users/raylusifontes/repos')
        .then(resp => resp.json())
        .then(data => {
            let novaData = data;
    
        link2.textContent = novaData[1].clone_url;
        })
    }
botao2.addEventListener('click', callApi2);