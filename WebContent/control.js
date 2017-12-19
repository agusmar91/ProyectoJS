
function comprobar() {
	
	var primo = window.prompt("Dime numero primo del 1 al 10");
	
	if (primo == 1 || primo == 2 || primo == 3) {			
		window.alert("LO HAS CONSEGUIDO!!");
	}
	
}

function viajar() {
	
	var destino = window.prompt("Dime a donde quieres viajar");
	
	switch (destino) {
	
		case "Roma": 
			window.alert("El viaje cuesta 500€");
			break;
		
		case "París": 
			window.alert("El viaje cuesta 450€");
			break;
			
		case "Paris": 
			window.alert("El viaje cuesta 450€");
			break;
			
		case "Berlin": 
			window.alert("El viaje cuesta 387.56€");
			break;
					
		default:
			window.alert("Pide presupuestos");
			break;
			
	}
	
}