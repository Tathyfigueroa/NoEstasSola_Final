$(function() {
    $('.slider-img').on('click', function(event) {
      // Si la imagen clicada ya está activa, redirige
      if ($(this).hasClass('active')) {
        const link = $(this).find('a').attr('href');
        window.open(link, '_blank');
      } else {
        // Si la imagen no está activa, cancela la redirección y cambia de activa
        event.preventDefault();
        
        // Eliminar clase 'active' de la imagen activa actual
        $('.slider-img').removeClass('active');
        
        // Añadir clase 'active' a la imagen clicada
        $(this).addClass('active');
      }
    });
  });
  