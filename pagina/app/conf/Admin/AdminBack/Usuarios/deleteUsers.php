<?php

require_once '../../../database.php';

bbddConexion();
$bbdd = bbdd();

$idUser = $_POST['idUser'];
$array_idUserDelete = $_POST['userDelete'];

echo $idUser;

$resultCom = $bbdd->query("SELECT idCom FROM usuarios");

$idCom = $resultCom->fetch_array(MYSQLI_NUM)[0];

$resultadoDevuelve = $bbdd->query("SELECT idUser FROM usuarios WHERE idCom = $idCom");

$arrayDevuelve = $resultadoDevuelve->fetch_array(MYSQLI_NUM);


if ($array_idUserDelete != null) {
            foreach ($arrayDevuelve as $value) {
                foreach ($array_idUserDelete as $value2) {
                    if($value === $value2){
                        $bbdd->query("DELETE FROM usuarios WHERE idUser = $value2");
                        echo 'Eliminado con éxito';
                    }
            }
            }
            
}




?>