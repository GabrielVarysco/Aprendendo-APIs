$(document).ready(function(){

    //$("button").hide() //Pegaria todos os botões

    var v1 = $("#txtValor01");
    var v2 = $("#txtValor02");

    $("#btnSomar").click(function(){
        var result = parseFloat(v1.val()) + parseFloat(v2.val());
        $("#resultado").html("<b>" + result + "</b>");
    });

    $("#btnMultiplicar").click(function(){
        var result = parseFloat(v1.val()) * parseFloat(v2.val());
        $("#resultado").html("<b>" + result + "</b>");
    });

    $("#btnDividir").click(function(){
        var result = parseFloat(v1.val()) % parseFloat(v2.val());
        $("#resultado").html("<b>" + result + "</b>");
    });
    
    $("#btnSubtrair").click(function(){
        var result = parseFloat(v1.val()) - parseFloat(v2.val());
        $("#resultado").html("<b>" + result + "</b>");
        
        if(result < 0){
            $("#resultado").css("color", "red");
        }else{
            $("#resultado").css("color", "blue");
        }
    });


});