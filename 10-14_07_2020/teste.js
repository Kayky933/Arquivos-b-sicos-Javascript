function calcular() {
    var gasolina = precos("gasolina");
    var alcool = precos("alcool");

    var diferenca = alcool/gasolina  * 100;
    if (diferenca <= 70) {
        $('#result').val(exibi(diferenca) + "% Alcool");
    }
    else {
        $('#result').val(exibi(diferenca) + "% Gasosa");
    }
}

function precos(campo) {
    return ($('#' + campo).val()).replace(",", ".");
}
function exibi(exibir) {
    return exibir.toFixed(2).replace(".", ",");
}
$("#gasolina").mask('999,00', {reverse: true});
$(" #alcool").mask('999,00', {reverse: true});
