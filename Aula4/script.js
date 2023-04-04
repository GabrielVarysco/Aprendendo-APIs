function ler(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 1){
            $("#divResposta").html("Solicitação enviada!");
            //document.getElememtById("divResposta")
        }
        if(this.readyState == 4){
            if(this.status == 200){
                texto = $("#divResposta").html()
                $("#divResposta").html(texto + "<br>" + this.responseText);
            }
            if(this.status == 404){
                $("#divResposta").html("Página não encontrada");
            }
        }
    };

    // faz a requisição do arquivo
    xhttp.open("GET", "informacao.txt", true); //true nao é necessário pois é informação default
    xhttp.send();
}

function gerar(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 1){
            $("#divNumeros").html("Solicitação enviada");
        }
        if(this.readyState == 4){
            if(this.status == 200){
                $("#divNumeros").html(this.responseText);
            }
            if(this.status == 404){
                $("#divNumeros").html("Página não encontrada");
            }
        }
    };

    url = "numeros.php?numero="+ $("#txtNumero").val()
    xhttp.open("GET", url, true);
    xhttp.send();
}
