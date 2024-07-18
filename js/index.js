$(document).ready(function() {
    $('.navigation nav ul li a').hover(
        function() {
            // Mouse enter 
            $(this).addClass('hovered');
        }, 
        function() {
            // Mouse leave 
            $(this).removeClass('hovered');
        }
    );
});

$(document).ready(function(){
    $('.gridItem').hover(
      function() {
        // On mouse
        let img = $(this).find('.grid-img');
        let originalSrc = img.attr('src');
        let newSrc = originalSrc.replace('still.jpeg', 'hover.gif');
        img.data('original-src', originalSrc);
        img.attr('src', newSrc);
      },
      function() {
        // On mouse
        let img = $(this).find('.grid-img');
        img.attr('src', img.data('original-src'));
      }
    );
  });