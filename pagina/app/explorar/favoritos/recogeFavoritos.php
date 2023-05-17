<?php

require_once '../../../database.php';

bbddConexion();

$arrayJson = array();

$idUser = $_POST['idUserRec'];
$idTarian = $_POST['idTarianRec'];

$resultado = bbdd()->query("SELECT * FROM favoritos WHERE idUser = $idUser AND idTarian = $idTarian");


$row = $resultado->num_rows;


for ($i=0; $i < $row; $i++) { 
    $rows = $resultado->fetch_array(MYSQLI_NUM);

    array_push($arrayJson, $rows);
}

echo json_encode($arrayJson);



?>