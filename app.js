//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function updateList(){
    document.querySelector('ul#listaAmigos').innerHTML = ""
    document.querySelector("ul#resultado").innerHTML = ""
    amigos.forEach(element => {
        const node = document.createElement("li");
        const textnode = document.createTextNode(element);
        node.appendChild(textnode)
        document.querySelector('ul#listaAmigos').appendChild(node)
    });
}

function adicionarAmigo(){
    const amigo = document.querySelector('input#amigo').value
    amigos.push(amigo)
    updateList()
}

function sortearAmigo(){
    const amigoSelecionado = amigos[Math.ceil(Math.random()*amigos.length)-1]
    amigos = []
    updateList()
    document.querySelector("ul#resultado").innerHTML = amigoSelecionado
}