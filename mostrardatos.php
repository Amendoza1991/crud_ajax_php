<?php
include 'baseusuarios.php';

$sql = "SELECT * FROM usuariosajax";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"]. "</td>
                <td> " . $row["nombre"]. "</td>
                <td> " . $row["apellido"]. "</td>
                <td>" . $row["cedula"]."</td>
                <td> ". $row["correo"] . "</td>
                <td>" . $row["estado"] . "</td>
                <td>
                    <button class='eliminar' data-id='" . $row["id"] . "'>Eliminar</button>
                    <button class='actualizar' data-id='". $row["id"]. "' data-nombre='".$row["nombre"]."' data-apellido='".$row["apellido"]."' data-cedula='".$row["cedula"]."' data-correo='".$row["correo"]."' data-estado='".$row["estado"]."'>Actualizar</button>
                </td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='6'>0 resultados</td></tr>";
}
$conn->close();
?>