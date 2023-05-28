<?php

require_once '../../database.php';

bbddConexion();

$arrayBloq = array();
$arrayResultadotarians = array();
$arrayResultadoJson = array();
$idCom = $_POST['idCom'];
$hastags = '#'.$_POST['hastags'];
$idUserBloq = $_POST['idUser'];

$resultBloq = bbdd()->query("SELECT idUser FROM bloqueados WHERE idUserBloq = $idUserBloq");


$resultado = bbdd()->query("SELECT usuarios.nombre, usuarios.img, tarians.txt, tarians.img01, tarians.video, tarians.pdf, tarians.fecha, tarians.idTarian, usuarios.idUser, tarians.tipoVideo FROM usuarios, tarians WHERE usuarios.idUser = tarians.idUser AND usuarios.idCom = '$idCom' AND tarians.hastags = '$hastags';");

$rowBloq = $resultBloq->num_rows;
$row = $resultado->num_rows;

for ($i=0; $i < $rowBloq; $i++) { 
    $rowsBloq = $resultBloq->fetch_array(MYSQLI_NUM);
    array_push($arrayBloq, $rowsBloq);
}

for ($i=0; $i < $row; $i++) { 
    $rows = $resultado->fetch_array(MYSQLI_NUM);
    array_push($arrayResultadotarians, $rows);    
}

if ($rowBloq == 0) {
    foreach ($arrayResultadotarians as $value) {
        array_push($arrayResultadoJson, $value);
    }
}

foreach ($arrayResultadotarians as $value01) {
    foreach ($arrayBloq as $value02) {
        if ($value01[8] != $value02[0]) { 
            array_push($arrayResultadoJson, $value01);
        }
    }
}


echo json_encode($arrayResultadoJson);


?>