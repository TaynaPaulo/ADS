document.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		const btn = document.querySelector("#btnCalcular");
	
		btn.click();
		alert(calculo);
	}
	
});

var numero1 = document.querySelector("#number1");
var numero2 = document.querySelector("#number2");
var numero3 = document.querySelector("#number3");
var numero4 = document.querySelector("#number4");
var numero5 = document.querySelector("#number5");

function Calcular(){
	quadrado1 = Math.pow(numero1.value, 2); 
	quadrado2 = Math.pow(numero2.value, 2);
	quadrado3 = Math.pow(numero3.value, 2);
	quadrado4 = Math.pow(numero4.value, 2);
	quadrado5 = Math.pow(numero5.value, 2);
	
	alert('O primeiro número elevado ao quadrado é: ' + quadrado1); 
	alert('O segundo número elevado ao quadrado é: ' + quadrado2); 
	alert('O terceiro número elevado ao quadrado é: ' + quadrado3); 
	alert('O quarto número elevado ao quadrado é: ' + quadrado4); 
	alert('O quinto número elevado ao quadrado é: ' + quadrado5); 
}

