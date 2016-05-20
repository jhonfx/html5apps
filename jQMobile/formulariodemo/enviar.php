<?php
	
	$dbhost="localhost";
	$dbusuario="root";
	$dbpassword="admin";
	$db="usuario";
	$conexion = mysql_connect($dbhost, $dbusuario, $dbpassword);
	mysql_select_db($db, $conexion);
	
	$nombre = $_POST['nombre'];
	echo $nombre;
	$edad = $_POST['edad'];
	echo $edad;

	mysql_query("INSERT INTO user(nombre, edad) VALUES('$nombre','$edad')",$conexion);
	$error = mysql_error($conexion);

?>