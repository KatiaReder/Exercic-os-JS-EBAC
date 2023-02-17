
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

})
