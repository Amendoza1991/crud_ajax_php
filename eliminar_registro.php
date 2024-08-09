<?php
include 'baseusuarios.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];

    $sql = "DELETE FROM usuariosajax WHERE id = $id ";

    if ($conn->query($sql) === TRUE) {
        echo "Registro eliminado con exito";
    }else {
        echo"Error al eliminar el registro: " . $conn->error;
    }

    $conn->close();
}

?>