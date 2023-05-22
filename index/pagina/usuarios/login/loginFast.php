<?php
session_start();

$idCom = $_GET['id'];

var_dump($idCom);

if ($_SESSION['permanente']==true) {
    $idUser = $_SESSION['usuario'];
    header('Location: ../../app/accesPrinc.php?id='.$idUser);
}else{
    header('Location: ./loginUser.html?idCom='.$idCom);
}
?>