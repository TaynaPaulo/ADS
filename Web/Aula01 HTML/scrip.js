$('#inputOla').click(
    function(){
        cadastro = 
        // {
        //     'nome' :document.getElementById('inputNome').value,
        //     'endereco' :document.getElementById('inputEndereco').value,
        //     'email' :document.getElementById('inputEmail').value
        // }

        // alert( 'Meu nome é: ' + cadastro.nome + ' Meu endereço é: ' + cadastro.endereco + ' Meu email é: ' + cadastro.email)

        calculo = {
            'a' :document.getElementById('inputA').value,
            'b' :document.getElementById('inputB').value,
            'c' :document.getElementById('inputC').value
        }

        let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3;
        
        if (media >= 70) {
            alert ('você foi aprovado!');
        } else {
            alert('você ficou de exame!');
        }


    }
)