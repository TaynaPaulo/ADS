document.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		const btn = document.querySelector("#btnCalcular");
	
		btn.click();
		alert(calculo);
	}
	
});

function Calcular(){
	
	var idade = document.getElementById("number1").value;
	idade = idade.split(",");
	var maior = 0;
	var menor = 0;

	for(i=0;i<idade.length;i++){
		if(parseInt(idade[i]) >=18){
			maior++;
		}else{
			menor++;
		}
	}
  alert( maior + "  Pessoas são maiores de Idade  |  " + menor + "  Pessoas são menores de Idade" );
}