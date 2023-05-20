<?php

require_once '../../../../database.php';

bbddConexion();

$idUser = $_POST['idUser'];

$resultado = bbdd()->query("SELECT idUserBloq FROM bloqueados WHERE idUser=$idUser");

echo json_encode($resultado->fetch_array(MYSQLI_NUM));


?>