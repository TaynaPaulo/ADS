document.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		const btn = document.querySelector("#btnCalcular");
	
		btn.click();
		alert(calculo);
	}
	
});

var numero1 = document.querySelector("#number1");

function Calcular(){
    quilometros = 12;
	valor = numero1.value;
    km = ((valor/5.5)*12);

    const km1 = km.toFixed(1);

	alert('Você consegue rodar '+km1 + ' quilometros com ' + valor + ' reais.');
}

