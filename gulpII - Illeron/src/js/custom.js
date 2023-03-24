$(document).ready(function(){

   var owl = $('.owl-carousel');
   owl.owlCarousel();

   $('.featured-item h4').click( function(){
      $(this).css({
         'color': '#fff',
         'background': '#8a0d0d',
         'font-weight': '100',
      });
   });


   $('#form-submit').on('click', function(e){
      e.preventDefault()
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      if($('#email').val() === emailRegex){
             alert('obrigada')
         }
   });


   $('.nav-modal-open').on('click', function(e){
      e.preventDefault();
      let elem = $(this).attr('rel')
      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())
      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()
   })

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')
      const inputSenha = $('#senha')

      validate(inputName)
      validate(inputEmail)
      validate(inputSenha)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }

   })

   function validate( elem ){
      if( elem.val() == '') {
         elem.parent().find('.text-muted').show()
         elem.addClass('invalid')
         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }


   $('body').on('blur', '#nome', function(){
      validate($(this))
   })
   $('body').on('blur', '#email', function(){
      validate($(this))
   })
   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
   })
   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('(00) 00000-0000');
   })
   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
   })
})

 $( function() {
    var dialog, form,
      emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      email = $( "#email" ),
      password = $( "#password" ),
      allFields = $( [] ).add( email ).add( password ),
      tips = $( ".validateTips" );

    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }

    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Tamanho do " + n + " deve ser entre " +
          min + " e " + max + "." );
        return false;
      } else {
        return true;
      }
    }

    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }

    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );

      valid = valid && checkLength( email, "email", 6, 80 );
      valid = valid && checkLength( password, "password", 5, 16 );

      valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
      valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Senha só permite : a-z 0-9" );

      if ( valid ) {
        $( "#users tbody" ).append( "<tr>" +
          "<td>" + email.val() + "</td>" +
          "<td>" + password.val() + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
      }
      return valid;
    }

    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        "Entrar": addUser
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });

    $( "#create-user" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
  } );