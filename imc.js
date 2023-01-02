const btn = document.querySelector('#calcular');


btn.addEventListener('click', function(e){

e.preventDefault();

const name = document.querySelector('#nome');
const nomeValue = name.value;
const altura = document.querySelector('#altura');
const alturaValue = altura.value;
const peso = document.querySelector('#peso');
const pesoValue = peso.value;

    if (nomeValue == '' || alturaValue == '' || pesoValue == ''){
        alert("preencha todos os campos!!");
    }else if(!(nomeValue == '' || alturaValue == '' || pesoValue == '')){

    var imc = (pesoValue / ((alturaValue)**2)).toFixed(2); 


    function tabela(){
        if(imc <= 18.5){
            document.getElementById('result').innerHTML = nomeValue + " o seu imc é " + imc + " e você está abaixo do peso!";
        } else if(imc <= 24.9){
            document.getElementById('result').innerHTML = nomeValue + " o seu imc é " + imc + " e você está com o peso ideal!";
        } else if(imc <= 29.9){
            document.getElementById('result').innerHTML = nomeValue + " o seu imc é " + imc + " e você está levemente acima do peso!";
        } else if(imc <= 34.9){
            document.getElementById('result').innerHTML = nomeValue + " o seu imc é " + imc + " e você está com obesidade grau I!";
        } else if(imc <= 39.9){
            document.getElementById('result').innerHTML = nomeValue + " o seu imc é " + imc + " e você está com obesidade grau II!";
        } else{
            document.getElementById('result').innerHTML = nomeValue + " o seu imc é " + imc + " e você está com obesidade grau III!";
        }
    }

    return tabela();
    }

} );








