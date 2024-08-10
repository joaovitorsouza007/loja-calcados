$('#telefone').mask('(00) 0000-0000');

$('#cpf').mask('000.000.000-00', {reverse: true});

$('#rg').mask('00.000.000-0', {reverse: true});

const botao = document.getElementById("submit");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const rg = document.getElementById("rg");
const cpf = document.getElementById("cpf");
const cor = document.getElementById("select");
const tamanho = document.getElementById("tamanho");
const botao1 = document.getElementById("comp");

botao.addEventListener('click', function(){
    event.preventDefault();
    if (nome.value != "" && telefone.value != "" && email.value != "" && rg.value != "" && cpf.value != "") {
        alert("Sua compra foi concluída com sucesso")
    } else {
        alert("Preencha todos os dados corretamente")
    }

});

botao1.addEventListener('click', function(){
    event.preventDefault();
    alert("oi")
});