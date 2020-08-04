


var valorexterno = 0;
var sequencial = 1;

function Insert() {
        
        // exemplo js puro
        /*
        var e = document.getElementById("produtos");
        var descricao = e.options[e.selectedIndex].text;
        var codigoproduto = e.options[e.selectedIndex].value;
        */

        // jquery
        var descricao = $("#produtos :selected").text();
        var codigoproduto = $("#produtos :selected") .text();

        //alert("Alerta 1:" + valorexterno);

        var qtd = $("#quantidade").val();
        
        //teste(qtd);

        //alert("Alerta 4:" + valorexterno);

        var valor = $("#valor").val();

        console.log("quantidade:"+qtd + " valor:" + valor );
        
        //if( isNumber(qtd) && isNumber(valor))  javascript puro
        if( $.isNumeric(qtd) && $.isNumeric(valor) )
        {
            var linha = "<tr><td>" +sequencial + "</td><td>" + descricao + "</td><td>" + qtd + "</td><td>" + valor + "</td><td>" + ( qtd * valor ) +"</td></tr>";
            $("#tabela1 tbody").append(linha);
            sequencial++;
            valorexterno= valorexterno + (qtd*valor);
            $("#valorTotal").text(valorexterno);
        }
        else
        {
            if(! $.isNumeric(qtd) )
                alert("A quantidade deve ser numérica !");

            if(! $.isNumeric(valor))
                alert("O valor deve ser numérico !");
        }
    }

    
    function teste(abcde)
    {
        alert("Alerta 2:" + valorexterno);
        valorexterno = abcde
        alert("Alerta 3:" + valorexterno);
    }
    


    // javascript puro
    function isNumber( text ) {
        return ! isNaN(parseFloat(text)) && isFinite(text);
    }
