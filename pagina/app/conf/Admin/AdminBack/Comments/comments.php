<?php

require_once '../../../../../database.php';

bbddConexion();

$idUser = $_POST['idUser'];

$resultCom = bbdd()->query("SELECT idCom FROM usuarios WHERE idUser = $idUser");

$idCom = $resultCom->fetch_array(MYSQLI_NUM)[0];

$resultados = bbdd()->query("SELECT comentarios.txt, comentarios.fecha, usuarios.nombre, comentarios.idComentario FROM comentarios, usuarios WHERE comentarios.idCom = $idCom AND usuarios.idUser=comentarios.idUser");

$arrayResultados = array();

$row = $resultados->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultados->fetch_array(MYSQLI_NUM);

    $arraynew = array();
    array_push($arraynew, $rows[0], $rows[1], $rows[2], $rows[3]);
    array_push($arrayResultados, $arraynew);

    
}

var_dump($arrayResultados);


?>