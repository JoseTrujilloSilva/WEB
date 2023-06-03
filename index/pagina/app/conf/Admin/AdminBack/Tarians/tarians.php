<?php

require_once '../../../../../database.php';

bbddConexion();

$idUser = $_POST['idUser'];

$resultCom = bbdd()->query("SELECT idCom FROM usuarios WHERE idUser = $idUser");

$idCom = $resultCom->fetch_array(MYSQLI_NUM)[0];

$resultados = bbdd()->query("SELECT tarians.txt, tarians.img01, tarians.video, tarians.pdf, tarians.fecha, usuarios.nombre, tarians.idTarian FROM tarians, usuarios WHERE tarians.idCom = $idCom AND usuarios.idUser=tarians.idUser ORDER BY tarians.fecha DESC");

$arrayResultados = array();

$row = $resultados->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultados->fetch_array(MYSQLI_NUM);

    $arraynew = array();
    array_push($arraynew, $rows[0], $rows[1], $rows[2], $rows[3], $rows[4], $rows[5], $rows[6]);
    array_push($arrayResultados, $arraynew);
}

echo json_encode($arrayResultados);


?>