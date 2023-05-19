<?php

require_once '../../../database.php';
$comentario = $_POST['idComentario'];
$idUser = $_POST['idUserDeleteComment'];
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);

bbddConexion();
$bbdd = bbdd();



$bbdd->query("DELETE FROM comentarios WHERE idComentario = $comentario");


header('Location: ../../misTarians.php?id='.$idUser);


?>