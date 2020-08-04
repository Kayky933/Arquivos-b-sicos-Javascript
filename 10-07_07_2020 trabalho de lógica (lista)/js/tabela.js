//função para validar e acrescentar linhas a tabela
function tabela(peso, valorReais) {
    var peso = variaveis("peso");
    var valorReais = variaveis("valorReais");

    if (peso >= 1 && valorReais >= 1) {
        var valor = peso * valorReais;
        var linha = "<tr><th></th><td>" + peso + " Kg</td><td>R$" + FormataTabela(valorReais) + "</td><td>R$" + FormataTabela(valor) +
            "<button onclick='remover()'class='remover ml-5 bg-danger'>Excluir</button></td></tr>";
        $("#tabela tbody").append(linha);

        //Criação de um objeto --------------------------------------------
        function item(peso, valorReais, valor) {
            this.peso = peso;
            this.valorReais = valorReais;
            this.valor = valor;
        }

        //exibindo objeto no console
        var item1 = new item(peso, valorReais, valor);
        console.log("Peso="+FormataTabela(item1.peso) +
        "\nValor="+FormataTabela(item1.valor) +
         "\nValor do Item=" + FormataTabela(item1.valorReais));
        //Final do objeto -------------------------------------------------

        $('#TotalPagar').val("R$" + FormataTabela(valor));
        
        //limpa campos após clicar para adicionar linha
        $('#peso').val("");
        $('#valorReais').val("");
    } else {
        numero(peso, valorReais);
    }
}

//Função que valida o botão onde mostra a quantidade de itens e o valor
function quantidade(peso, valorReais) {
    var peso = variaveis("peso");
    var valorReais = variaveis("valorReais");
    var valor = Number(peso) * Number(valorReais);
    $('#TotalPagar').val("R$" + valor.toFixed(2).replace('.', ','));
}

//remover linha da tabela
$("#tabela").on("click", ".remover", function (e) {
    $(this).closest('tr').remove();
});

//apaga todos os itens da tabela
$("#apagar").click(function () {
    $("#tabela tbody tr").remove();
});
function variaveis(variavel) {
    return ($('#' + variavel).val()).replace(",", ".");
}
//mascara de valores
$("#valorReais").mask('99990,00', { reverse: true });
$("#peso").mask('999,99', { reverse: true });

//formata valor que vai ser posto na tabela
function FormataTabela(valor) {
    if (typeof valor != "number") {
        valor = valor.replace("R$", "");
        valor = Number(valor);
    }
    return valor.toFixed(2).replace(".", ",");
}
//validando números colocados na tabela
function numero(camp1, camp2) {
    if (camp1 == "" || camp1 <= 0) {
        alert("O campo Peso não foi preenchido corretamente");
    }
    if (camp2 == "" || camp2 <= 0) {
        alert("O campo Valor KG não foi preenchido corretamente");
    }
}