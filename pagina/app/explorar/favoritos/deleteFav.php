<?php

require_once '../../../database.php';

$idFav = $_GET['idFav'];
$idUser = $_GET['idUserFav'];

bbddConexion();


bbdd()->query("DELETE FROM favoritos WHERE idFav = $idFav");


header('Location: ./deleteFav.html?idUser='.$idUser);


?>