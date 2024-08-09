<?php
include 'baseusuarios.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $cedula = $_POST['cedula'];
    $correo = $_POST['correo'];
    $estado = $_POST['estado'];

    $sql = "UPDATE usuariosajax SET nombre='$nombre', apellido='$apellido', cedula='$cedula', correo='$correo', estado='$estado'
    WHERE id='$id'";

    if($conn->query($sql) === TRUE) {
        echo "!!!Se actualizo!!!";

    } else {
        echo "ERROR AL ACTUALIZAR REGISTRO: " . $conn->error;
    }

    $conn->close();
}

?>