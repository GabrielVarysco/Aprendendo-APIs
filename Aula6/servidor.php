<?php

    header("Content-type: application/json");

    $user = "root";
    $password = "";
    $banco = "loja";
    $local = "localhost";

    $conn = mysqli_connect($local, $user, $password, $banco);

    if($conn){
        //_REQUEST "listar" o banco vai listar os produtos
        if(isset($_REQUEST['listar'])){
            $sql = "SELECT * FROM produto ORDER BY nome";
            $result = mysqli_query($conn, $sql);
            $array = array();
            while($linha = mysqli_fetch_assoc($result)){
                $array[] = $linha;
            };
            echo '{"produtos" : '.json_encode($array) . ' } ';
        }

        //_REQUEST "cadastrar" o banco vai cadastrar os produtos
        if(isset($_REQUEST['cadastrar'])){
            $nome = $_GET["nome"];
            $preco = $_GET["preco"];
            $sql = "INSERT INTO produto (nome, preco) 
                    VALUES('$nome', $preco)";
            mysqli_query($conn, $sql);
            $result = mysqli_insert_id($conn);
            if($result > 0){
                echo '{ "Resposta" : "ok", "id" : '.$result.' } ';
            }else{
                echo '{ "Resposta" : "erro" } ';
            }
        }

        mysqli_close($conn);
        
    }