<?php

require_once '../../database.php';

bbddConexion();

$keyssUser = $_POST['keyss'];

$resultados = bbdd()->query("SELECT keyssUser FROM usuarios");
$resultado2 = bbdd()->query("SELECT idUser FROM admins");
$rowR2 = $resultado2->num_rows;

$array_keyss = $resultados->fetch_array(MYSQLI_NUM);

    foreach($array_keyss as $value){
        if (crypt($keyssUser, '7766GGGttwfef#@') == $value) {

            $keyssFormat = strval($value);

            $bbdd = bbdd();
        
            $resultadoIdUser = $bbdd->query("SELECT idUser FROM usuarios WHERE keyssUser = '$keyssFormat'");

            $idUser = $resultadoIdUser->fetch_array(MYSQLI_NUM)[0];

            $pattern = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYUXYZ";
    
            $max = strlen($pattern)-1;

            $password = '';
    
            for($i = 0; $i < 20; $i++){
            $password .= substr($pattern, mt_rand(0,$max), 1);
            }

            echo $password;
    
            $passwordEncrypt = password_hash($password, PASSWORD_DEFAULT, ['cost'=>10]);
    
            $stmt = $bbdd->prepare("UPDATE usuarios SET clave = ? WHERE idUser = ?");
            $stmt->bind_param("si", $passwordEncrypt, $idUser); // assume $password and $username are the sanitized inputs from user
            $stmt->execute();

            for ($i=0; $i < $rowR2; $i++) { 
                $rowsR2 = $resultado2->fetch_array(MYSQLI_NUM)[0];
        
                if ($rowsR2 == $idUser) {
                    $stmt = $bbdd->prepare("UPDATE admins SET clave = ? WHERE idUser = ?");
                    $stmt->bind_param("si", $passwordEncrypt, $idUser); // assume $password and $username are the sanitized inputs from user
                    $stmt->execute();
                }
            }
            
            header('Location: ./salidaRec.html?password='.$password);
        }
    }

?>