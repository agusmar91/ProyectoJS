var nombre = "Juan";

function variables() {
	
	console.log("Llamada a funcion variables");
	
	var numero = 4;
	console.log("El numero es: " + numero);

	numero = 6;
	console.log("El numero es: " + numero);

	console.log("Te llamas " + nombre);
	
	if (numero >= 3) {
		
		//let solucion = "OK"; Con let la variable es local al bloque
		var solucion = "OK";
		
	}
	
	console.log("La solucion es: " + solucion);

	var mensaje = "En un lugar \n de la \"mancha\" ";
	window.alert(mensaje);
}
