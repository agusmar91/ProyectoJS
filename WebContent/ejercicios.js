
function sacarNumeros(){	//primer ejercicio
	
	
	
	var inicio = parseInt(document.getElementById("inicio").value);
	var fin = parseInt(document.getElementById("fin").value);
	//alert("inicio: " + inicio + " fin: " +  fin);
	
	if(inicio < fin){
				
		for (var i = inicio; i <= fin; i++) {
			console.log(i);
		}
		
	}else{		
		window.alert("El inicio tiene que ser menor al fin");		
	}
	
}

function calcular() {	//segundo ejercicio
	
	var unidad = document.getElementById("unidad").value;
	var precio = document.getElementById("precio").value;
	
	var resultado = unidad * precio;
	
	
	window.alert(resultado.toFixed(2));
	
}

function comprobar(){	//tercer ejercicio
	
	var numero = document.getElementById("numero").value;
	
	if (numero == 17) {
		
		window.alert("Numero secreto correcto!!");
		
	}else{
		
		window.alert("Error vuelve a intetentarlo");
		
	}
	
}