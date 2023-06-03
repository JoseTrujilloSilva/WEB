<?php

require_once '../../../../database.php';

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);


bbddConexion();
$bbdd = bbdd();

$array_idTarians = array();
$idUser = $_GET['idUserTariansUser'];
$array_idTarians = $_GET['tariansUser'];
var_dump($array_idTarians);
$arrayDevuelve = array();

$resultadoDevuelve = $bbdd->query("SELECT idTarian FROM tarians WHERE idUser = $idUser");

$row = $resultadoDevuelve->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultadoDevuelve->fetch_array(MYSQLI_NUM);
    array_push($arrayDevuelve, $rows[0]);
}

var_dump($arrayDevuelve);

if ($array_idTarians != null) {
    echo 'Entra en no nulo';
            foreach ($arrayDevuelve as $value) {
                foreach ($array_idTarians as $value2) {
                    if($value === $value2){
                        $bbdd->query("DELETE FROM tarians WHERE idTarian = $value2");
                       header('Location: ./tariansResult.html?id='.$idUser);
                    }
            }
            }
            
}




?>