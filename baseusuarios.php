<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "ajax";

$conn = new mysqli($servername, $username, $password, $db );
if($conn-> connect_error){
    die('connetion failed' . $conn->connect_error);

}
echo'!!!LA CONEXION HA SIDO EXITOSA!!!';
?>