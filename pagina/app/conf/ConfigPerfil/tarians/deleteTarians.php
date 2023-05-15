<?php

require_once '../../../../database.php';

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);


bbddConexion();
$bbdd = bbdd();

$idUser = $_POST['idUserTarians'];
$array_idTariansDelete = $_GET['tarians'];
var_dump($array_idTarianDelete);
$arrayDevuelve = array();

$resultadoDevuelve = $bbdd->query("SELECT idTarian FROM tarians WHERE idUser = $idUser");

$row = $resultadoDevuelve->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultadoDevuelve->fetch_array(MYSQLI_NUM);
    array_push($arrayDevuelve, $rows[0]);
}

var_dump($arrayDevuelve);

if ($array_idTarianDelete != null) {
    echo 'Entra en no nulo';
            foreach ($arrayDevuelve as $value) {
                echo $value;
                foreach ($array_idTariansDelete as $value2) {
                    if($value === $value2){
                        $bbdd->query("DELETE FROM tarians WHERE idTarian = $value2");
                        /*
                       header('Location: ./tariansResult.html?id='.$idUser);
                       */
                    }
            }
            }
            
}




?>