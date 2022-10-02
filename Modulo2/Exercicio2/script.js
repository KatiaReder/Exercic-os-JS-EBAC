var valor = 30000;
var prestacao = 750;
var valorTotal = 0;

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";

function respostas(){
    if(branco == "branco"){

    document.getElementById('respostaA').innerHTML = "Resposta: É verdade! ";
    }else{

        document.getElementById('respostaA').innerHTML = " Resposta: É falso! ";
    }
    if(branco == cinza){

    document.getElementById('respostaB').innerHTML = " Resposta: É verdade! ";
    }else{

        document.getElementById('respostaB').innerHTML = " Resposta: É falso! ";
    }

    if(carro === branco){
    
    document.getElementById('respostaC').innerHTML = " Resposta: É verdade! ";
    }else{
    
        document.getElementById('respostaC').innerHTML = " Resposta: É falso! ";
    }

    var cavalo = carro == "preto" ? "cinza" : "marron";
 
       document.getElementById('respostaD').innerHTML = ("Resposta: " + cavalo);


       valorTotal = valor - 3000;
       quantPres = valorTotal / prestacao;

       document.getElementById('respostaE').innerHTML = ("Resposta: " + quantPres);



       somaVar = branco + preto + cinza;
       total = somaVar.length;
      
       document.getElementById('respostaF').innerHTML = ("Resposta: " + total);

}