/* Está chamando o onload="inclui_nome()"" */
function inclui_nome() {

    /* Caixinha que aparece para digitar seu nome */
    var nome_variavel = prompt("Coloque seu nome:");

    /* Irá aparecer o formulário se o usuário preencher a coluna com um nome */
    if (nome_variavel) {
        document.getElementById("marcacao_nome").innerHTML = "Olá " + nome_variavel + ", vamos começar?";
    }

    /* Não irá aparecer o formulário se o usuário não preencher a coluna */
    else {
        alert("Nome não atribuído");
        inclui_nome();
    }

}

/* Está chamando o onclick="funcao_resposta()" */
function funcao_resposta() {

    /* Questão 1 */
    var resposta_1 = document.querySelector('input[name="questao_1"]:checked');

    /* Questão 2 */
    var resposta_2 = document.querySelector('input[name="questao_2"]:checked');

    /* Questão 3 */
    var resposta_3 = document.querySelector('input[name="questao_3"]:checked');

    /* Questão 4 */
    var resposta_4 = document.querySelector('input[name="questao_4"]:checked');

    /* Questão 5 */
    var resposta_5 = document.querySelector('input[name="questao_5"]:checked');

    /* Contalizador */
    var contabilizador = 0;

    /* Se todas as questões forem respondidas */
    if (resposta_1 && resposta_2 && resposta_3 && resposta_4 && resposta_5) {

        /* Se a questão for correta, o usuário acerta */
        if (resposta_1.value == "correta") {
            document.getElementById("resposta_correta_1").innerHTML = "Correta!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_1").innerHTML = "Errada, a questão correta é a letra A, porque..."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_2.value == "correta") {
            document.getElementById("resposta_correta_2").innerHTML = "Correta!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_2").innerHTML = "Errada, a questão correta é a letra A, porque..."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_3.value == "correta") {
            document.getElementById("resposta_correta_3").innerHTML = "Correta"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_3").innerHTML = "Errada, a questão correta é a letra A, porque..."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_4.value == "correta") {
            document.getElementById("resposta_correta_4").innerHTML = "Correta!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_4").innerHTML = "Errada, a questão correta é a letra A, porque..."
        }

        /* Se a questão for correta, o usuário acerta */
        if (resposta_5.value == "correta") {
            document.getElementById("resposta_correta_5").innerHTML = "Correta!"
            contabilizador = contabilizador + 1;
        }

        /* Se a questão estiver errada, o usuário erra */
        else {
            document.getElementById("resposta_errada_5").innerHTML = "Errada, a questão correta é a letra A, porque..."
        }

        /* Quantidade de acertos */
        document.getElementById("quantidade_acertos").innerHTML = "Você acertou " + contabilizador + " questões!";

    }

    /* Se usuário não responder nenhuma questão */
    else {
        alert("Responda todas as questões!")
    }

}