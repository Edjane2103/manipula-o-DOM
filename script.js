// seleciona os elementos do DOM que serão manipulados
const botao =document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

//Adiciona um evento de click ao botao
botao.addEventListener("click", () => {
    //solicita o nome do usuário
    let nome = prompt("qual é o seu nome?");

    //condição para verificar se o nome foi fornecido
    if (nome) {
        //solicita a idade do usuário
        let idade = prompt("qual é a sua idade?");

        //condição para verificar se a idade é um número válido
        if (isNaN(idade) || idade <= 0) {
            mensagem.innerText ="por favor, insira uma idade válida";
            mensagem.style.color = "red";  // altera a cor do texto para vermelho
        } else {
            //saída de dados com base na idade fornecida
            if (idade < 18) {
            mensagem.innerText = `olá, ${nome}! você tem apenas  $ {idade} anos.` ;
            mensagem.style.color = "blue"; //altera a cor do texto para azul
        } else {
            //mensagem.inertext = `olá, ${nome}! vocêé maior de idade com ${idade} anos.` ;
            mensagem.style.color = "gren"; // altera a cor do texto para verde
        }
     console.log(`nome do usuário: ${nome}`);
    console.log(`idade do usuário: ${idade}`);
}
    } else {
     mensagem.innerText = "nome não fornecido. por favor, insira um nome.";
     mensagem.style.color ="orange"; // altera a cor do texto para laranja
     }
} );