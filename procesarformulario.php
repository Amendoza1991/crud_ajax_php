<?php
include 'baseusuarios.php';
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $cedula = $_POST['cedula'];
    $correo = $_POST['correo'];
    $estado = $_POST['estado'];

    $sql = "INSERT INTO usuariosajax(nombre, apellido, cedula, correo, estado)
    VALUES ('$nombre', '$apellido', '$cedula', '$correo', '$estado')";

    if($conn->query($sql) === TRUE) {
        echo "!!!SE HA CREADO UN NUEVO DATO!!!";

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

?>