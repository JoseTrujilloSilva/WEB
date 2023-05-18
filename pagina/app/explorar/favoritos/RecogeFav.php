<?php

require_once '../../../database.php';

bbddConexion();

$arrayJson = array();

$idUser = $_POST['idUserRec'];

$resultado = bbdd()->query("SELECT * FROM favoritos WHERE idUser = $idUser ORDER BY fecha");


$row = $resultado->num_rows;


for ($i=0; $i < $row; $i++) { 
    $rows = $resultado->fetch_array(MYSQLI_NUM);

    $idTarians = $rows[2];

    $resultado2 = bbdd()->query("SELECT tipoVideo FROM tarians WHERE idTarian = $idTarians");

    $tipoVideo = $resultado2->fetch_array(MYSQLI_NUM)[0];

    array_push($rows, $tipoVideo);

    array_push($arrayJson, $rows);
}

echo json_encode($arrayJson);



?>