let amigos = [];


function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo'); 
    const nome = nomeInput.value.trim(); 

   
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; 
    }

    amigos.push(nome);

    nomeInput.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); 

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li'); 
        item.textContent = amigos[i]; 
        listaAmigos.appendChild(item); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear!');
        return; 
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}


