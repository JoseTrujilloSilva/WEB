<?php


function bbdd(){
    $usuario = 'root';//Enter your username of your mysql
    $constrasena = '';//Enter your username password of your mysql 
    $localhost = 'localhost';//Enter your host of your mysql

    $server = $localhost;
    $username = $usuario;
    $password = $constrasena;
    $database = 'tariansBack';

    $bbdd = new mysqli($server, $username, $password, $database);

    return $bbdd;

}


function bbddConexion(){
    $usuario = 'root';//Enter your username of your mysql
    $constrasena = '';//Enter your username password of your mysql 
    $localhost = 'localhost';//Enter your host of your mysql

    $server = $localhost;
    $username = $usuario;
    $password = $constrasena;

    return bbdd()->connect($server, $username, $password);
}



?>