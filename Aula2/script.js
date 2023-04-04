function validar(){
    var valor = document.getElementById("txtValor").value;
    var pInfo = document.getElementById("info");

    if(valor == ""){
        pInfo.innerHTML = "O campo valor deve ser preenchido!"
        return false;
    }else{

        //is Not A Number
        if(isNaN(valor)){
            pInfo.innerHTML = "O valor deve ser um número!"
            return false;

        }else{
            if(valor > 0 && valor < 11){
                return true;

            }else{
                pInfo.innerHTML = "Valor não permitido!"
                return false;
            }
        }
    }
}


function lerObjeto(){
    var carro = {modelo: "Doblo", ano: "2006"};

    var pessoa = {
        nome: "Maria",
        idade: 25,
        altura: 1.8,
        temFilhos: true,
        endereco: null,
        veiculo: carro,
        filhos: [
            {nome: "Carlos", idade: 10},
            {nome: "Júlia", idade: 8},
        ],
        formacao: [2006, 2013, 2017],
        imprimir: function(){
            texto = this.nome + " - Idade: " + this.idade + " - Carro: " + this.veiculo.modelo;
            return texto;
        },
    }

    divObjeto = document.getElementById("divObjeto");
    divObjeto.innerHTML = pessoa.imprimir();
}

//construir o objeto retangulo que possui os atributos largura e altura.
//este objeto devera conter um metodo que calcula a area do retangulo.
//criar dois campos no HTML para o usuario preencher com os valores de altura e largura.
//criar um botão para mostrar o resultado.


function lerRetangulo(){
    var retangulo = {
        largura : document.getElementById("txtLargura").value,
        altura : document.getElementById("txtAltura").value,
        area : function(){
            return this.altura * this.largura;
        }
    };
    var resultado = document.getElementById("resultado").value;
    resultado.innerHTML = "Área: " + retangulo.area();
}
