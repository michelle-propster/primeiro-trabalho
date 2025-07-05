
const botao = document.createElement("button");
    botao.textContent = "CLIQUE PARA VER UMA MENSAGEM!";
    botao.style.padding = "20px";
    botao.style.fontSize = "16px";
    botao.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow';
    botao.style.backgroundColor = "#cc1100";
    botao.style.color = "white";
    botao.style.borderRadius = "8px";  
    botao.style.cursor = "pointer"; 
    botao.style.border = "none";    

  //Como eu queria várias frases, procurei ajuda para poder fazer//

document.getElementById("container").appendChild(botao);
    const mensagens = [
    "No pain, no gain!",
    "Nunca torne-se um monstro para derrotar outro.",
    "O amanhã é uma esperança, nunca uma promessa! - Kindred",
    "Mudar faz bem. - Kha'Zix"
    ];

botao.addEventListener("click", function() {
    const fraseAleatoria = mensagens
    [Math.floor(Math.random() * mensagens.length)];

document.getElementById("mensagem").textContent = fraseAleatoria;
});