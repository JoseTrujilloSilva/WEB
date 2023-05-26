<?php

require_once '../../../../../database.php';

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);


bbddConexion();
$bbdd = bbdd();

$idUser = $_GET['idUserTarians'];
$array_idCommentsDelete = $_GET['tarians'];
$arrayDevuelve = array();

$resultCom = $bbdd->query("SELECT idCom FROM usuarios WHERE idUser = $idUser");

$idCom = $resultCom->fetch_array(MYSQLI_NUM)[0];

$resultadoDevuelve = $bbdd->query("SELECT idTarian FROM tarians WHERE idCom = $idCom");

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
                        $result2 = $bbdd->query("SELECT idTarian FROM tarians WHERE idUser = $idUser");
                        $arrayPaco = $result2->fetch_array(MYSQLI_NUM);
                        
                        foreach($arrayPaco as $valuePaco){
                            $result3 = $bbdd->query("DELETE FROM comentarios WHERE idTarian = $valuePaco");
                        }

                        foreach($arrayPaco as $valuePaco){
                            $result3 = $bbdd->query("DELETE FROM favoritos WHERE idTarian = $valuePaco");
                        }
                        $bbdd->query("DELETE FROM tarians WHERE idTarian = $value2");
                        /*
                       header('Location: ./tariansResult.html?id='.$idUser);
                       */
                    }
            }
            }
            
}




?>