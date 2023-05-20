<?php

require_once '../../database.php';

$idtarian = $_GET['idTarian'];
$idUser = $_GET['idUserTarian'];

bbddConexion();

bbdd()->query("DELETE FROM comentarios WHERE idTarian = $idtarian");
bbdd()->query("DELETE FROM tarians WHERE idTarian = $idtarian");


header('Location: ./deleteTarians.html?idUser='.$idUser);


?>