<?php

require_once '../../../../database.php';

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);


bbddConexion();
$bbdd = bbdd();

$idUser = $_GET['idUserComments'];
$array_idCommentsDelete = $_GET['comments'];
$arrayDevuelve = array();

$resultCom = $bbdd->query("SELECT idCom FROM usuarios");

$idCom = $resultCom->fetch_array(MYSQLI_NUM)[0];

$resultadoDevuelve = $bbdd->query("SELECT idComentario FROM comentarios WHERE idCom = $idCom");

$row = $resultadoDevuelve->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultadoDevuelve->fetch_array(MYSQLI_NUM);
    array_push($arrayDevuelve, $rows[0]);
}

var_dump($arrayDevuelve);

if ($array_idCommentsDelete != null) {
    echo 'Entra en no nulo';
            foreach ($arrayDevuelve as $value) {
                echo $value;
                foreach ($array_idCommentsDelete as $value2) {
                    if($value === $value2){
                        $bbdd->query("DELETE FROM comentarios WHERE idComentario = $value2");
                        header('Location: ./comentariosResult.html?id='.$idUser);
                    }
            }
            }
            
}




?>