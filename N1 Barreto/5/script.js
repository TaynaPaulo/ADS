document.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		const btn = document.querySelector("#btnCalcular");
	
		btn.click();
		alert(calculo);
}
	
});

function Calcular(){
let numero1 = document.querySelector("#number1");
let numero2 = document.querySelector("#number2");

let valorA = numero1.value;
let valorB = numero2.value;

let resultadoA = parseInt(valorA) + parseInt(valorB);
let resultadoB = valorA * valorB;

    if(valorA == valorB){
     alert('Seu valor de C é: '+ resultadoA);
    }
    else{
     alert('Seu valor de C é: '+ resultadoB);
    }
}