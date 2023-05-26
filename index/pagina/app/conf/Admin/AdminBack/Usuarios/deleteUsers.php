<?php

require_once '../../../../../database.php';

ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);

bbddConexion();
$bbdd = bbdd();

$idUser = $_POST['idUser'];
$array_idUserDelete = $_POST['userDelete'];
$arrayDevuelve = array();

echo $idUser;

$resultCom = $bbdd->query("SELECT idCom FROM usuarios");

$idCom = $resultCom->fetch_array(MYSQLI_NUM)[0];

$resultadoDevuelve = $bbdd->query("SELECT idUser FROM usuarios WHERE idCom = $idCom");

$row = $resultadoDevuelve->num_rows;

for ($i=0; $i < $row; $i++) { 
    $rows = $resultadoDevuelve->fetch_array(MYSQLI_NUM);
    array_push($arrayDevuelve, $rows[0]);
}

if ($array_idUserDelete != null) {
            foreach ($arrayDevuelve as $value) {
                foreach ($array_idUserDelete as $value2) {
                    if($value === $value2){
                        $bbdd->query("DELETE FROM favoritos WHERE idUser = $value2");
                        $bbdd->query("DELETE FROM bloqueados WHERE idUserBloq = $value2");
                        $bbdd->query("DELETE FROM bloqueados WHERE idUser = $value2");
                        $bbdd->query("DELETE FROM comentarios WHERE idUser = $value2");
                        $result2 = $bbdd->query("SELECT idTarian FROM tarians WHERE idUser = $value2");
                        $arrayPaco = $result2->fetch_array(MYSQLI_NUM);
                        
                        foreach($arrayPaco as $valuePaco){
                            $result3 = $bbdd->query("DELETE FROM comentarios WHERE idTarian = $valuePaco");
                        }

                        foreach($arrayPaco as $valuePaco){
                            $result3 = $bbdd->query("DELETE FROM favoritos WHERE idTarian = $valuePaco");
                        }
                        $bbdd->query("DELETE FROM tarians WHERE idUser = $value2");
                        $result = $bbdd->query("SELECT idUser FROM admins");
                        $arrayAdmin = $result->fetch_array(MYSQLI_NUM);
                        foreach($arrayAdmin as $valueAdmin){
                            if ($valueAdmin == $value2) {
                                $bbdd->query("DELETE FROM admins WHERE idUser = $value2");
                            }
                        }
                        $bbdd->query("DELETE FROM usuarios WHERE idUser = $value2");
                        /*
                        header('Location: ./UsuariosResult.html?id='.$idUser);
                        */
                    }
            }
            }
            
}




?>