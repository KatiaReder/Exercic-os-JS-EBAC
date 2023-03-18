
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').prepend('<span class="badge bg-secondary">Novo</span><br>')

    $('.section-heading').animate({
        opacity: 0.9,
        height: "50%"
    }, 2000);

        $('.caption').animate({
        height: "80%"
    }, 2000);
    
     $('.featured-item a').on('click', function(event){
        event.preventDefault();
        alert('Produto esgotado');

     })


     //Callback - ações que começam ao término de outra
     $('.featured-item:nth(1)').hide(2000, function(){
        //este é o callback
        //esse evento vai ser disparado depois que o hide acontecer
        console.log($(this).find('h4').text() + 'esgotado')

     })
     .show(2000, function(){
           console.log($(this).find('h4').text() + 'em estoque')
     })
    const duracao = 1000 //1s
     //hide e show são animaçãoes pré-definidas
     //toggle inverte o que estiver sendo feito
      $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeIn(duracao)
      .fadeOut(duracao)
      .toggle(duracao)
      .toggle(duracao)


      $('#form-submit').on('click', function(e) {
        e.preventDefault()

        if($('#email').val() != '')
        {
            $('#email').animate({
                opacity: "hidden"
            })
        }
     
      });


// Ouvinte de eventos .nav-modal-open

$('.nav-modal-open').on('click', function(e) {
    e.preventDefault();
//attr -> pega qualquer atributo do html
    let elem = $(this).attr('rel')
    $('.modal-body').html($('#' + elem).html())
    $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()


})

/* TODO: Incrementar a validação
* - checar se o email é válido (mais de 2 caracteres)
* - checar se o email é válido com ao menos um "@" e um "."
*/


function validate( elem ){
 if( elem.val() == '' ){
        console.log(`o compo de ${elem} é obrigatório` )

        elem.parent().find('.text-muted').show()
        elem.addClass('invalid')
        return false
    }else{
        elem.parent().find('.text-muted').hide()
        elem.removeClass('invalid')
    }
}

$('body').on('submit', '.modal-body .form', function(e) {
    e.preventDefault()

    const inputName = $('#nome')
    const inputEmail = $('#email')

    validate(inputName)
    validate(inputEmail)

if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid'))
{
    console.log("verificar campos obrigatórios")

    return false
    
}else{
    $(this).submit()
 
}

})

$('body').on('blur', '#nome', function(e){
   validate($(this))
})

$('body').on('blur', '#email', function(e){
   validate($(this))
})

$('body').on('blur', '#date', function(e){
   validate($(this))
$(this).mask('00/00/0000');
})

$('body').on('blur', '#time', function(e){
   validate($(this))
  $(this).mask('00:00');
})

$('body').on('blur', '#cep', function(e){
   validate($(this))

  $(this).mask('00000-000');
})

$('body').on('blur', '#phone', function(e){
   validate($(this))


  $(this).mask('00000-0000');
})


$('body').on('blur', '#cpf', function(e){
   validate($(this))


  $(this).mask('000.000.000-00');
})








})


