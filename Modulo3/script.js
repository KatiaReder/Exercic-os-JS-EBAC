function validaCampoNome(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        if(this.value != " " && this.value.match(/[a-z]/)){
            document.querySelector('.mensagem').innerHTML = " ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique se os campos estão preenchidos!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

function validaCampoEmail(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

            const emailValido = /^[a-z0-9]+@[a-z0-9]+\.([a-z]+)?$/i;

        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = " ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique se os campos estão preenchidos!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

function validaCampoCidade(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        if(this.value != " " && this.value.match(/[a-z]/)){
            document.querySelector('.mensagem').innerHTML = " ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique se os campos estão preenchidos!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

function validaCampoTel(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        const telValido = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;

 if(this.value.match(telValido)){
            document.querySelector('.mensagem').innerHTML = " ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique se os campos estão preenchidos!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}


function validaCampoCEP(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        let num = /^[0-9]{5}-[0-9]{3}$/;

        if(this.value.match(num)){
            document.querySelector('.mensagem').innerHTML = " ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique se os campos estão preenchidos!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

function validaCampoUF(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        let validaUF = /^[a-z]{2}$/i;
        if(this.value.match(validaUF)){

            document.querySelector('.mensagem').innerHTML = " ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique se os campos estão preenchidos!"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}



let obrigatorioNome = document.querySelectorAll('input.nome');
let obrigatorioEmail = document.querySelectorAll('input.email');
let obrigatorioTel = document.querySelectorAll('input.tel');
let obrigatorioCEP = document.querySelectorAll('input.cep');
let obrigatorioCidade = document.querySelectorAll('input.cidade');
let obrigatorioUF = document.querySelectorAll('input.uf');

for(let emFoco of obrigatorioNome){
    validaCampoNome(emFoco);
}
for(let emFoco of obrigatorioEmail){
    validaCampoEmail(emFoco);
}
for(let emFoco of obrigatorioTel){
    validaCampoTel(emFoco);
}
for(let emFoco of obrigatorioCEP){
    validaCampoCEP(emFoco);
}
for(let emFoco of obrigatorioCidade){
    validaCampoCidade(emFoco);
}
for(let emFoco of obrigatorioUF){
    validaCampoUF(emFoco);
}


function returnTrue(){
if(validaCampoNome && validaCampoEmail && validaCampoTel && validaCampoCEP && validaCampoCidade && validaCampoUF === true){

    return true;
  
}else{
    return false;
}
}

