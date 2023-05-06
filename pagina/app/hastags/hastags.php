<?php

require_once '../../database.php';

bbddConexion();

$arrayResultadoJson = array();
$idCom = $_POST['idCom'];
$hastags = '#'.$_POST['hastags'];

$resultado = bbdd()->query("SELECT usuarios.nombre, usuarios.img, tarians.txt, tarians.img01, tarians.video, tarians.pdf, tarians.fecha, tarians.idTarian FROM usuarios, tarians WHERE usuarios.idUser = tarians.idUser AND usuarios.idCom = '$idCom' AND tarians.hastags = '$hastags';");

$row = $resultado->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultado->fetch_array(MYSQLI_NUM);
    array_push($arrayResultadoJson, $rows);
}

echo json_encode($arrayResultadoJson);

?>