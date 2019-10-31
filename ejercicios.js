var resultado = 0;
resultado = Number(resultado);

for (var i = 0; i < 5; i++){
	
	var num = prompt("ingresar un numero");
	num = Number(num);
	resultado += num;	
}

// innerHTML es una propiedad, entonces se usa el igual, se asigna
// para usar append child primero hay que crear el elemento
document.querySelector('#resultado').innerHTML = resultado;
//alert(resultado);



