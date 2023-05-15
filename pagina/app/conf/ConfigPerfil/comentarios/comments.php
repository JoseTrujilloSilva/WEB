<?php

require_once '../../../../database.php';

bbddConexion();

$idUser = $_POST['idUser'];

$resultados = bbdd()->query("SELECT comentarios.txt, comentarios.fecha, usuarios.nombre, comentarios.idComentario FROM comentarios, usuarios WHERE comentarios.idUser = $idUser AND usuarios.idUser=comentarios.idUser");

$arrayResultados = array();

$row = $resultados->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultados->fetch_array(MYSQLI_NUM);

    $arraynew = array();
    array_push($arraynew, $rows[0], $rows[1], $rows[2], $rows[3]);
    array_push($arrayResultados, $arraynew);
}

echo json_encode($arrayResultados);


?>