$(document).ready(function() {
    $('.navigation nav ul li a').hover(
        function() {
            // Mouse enter event
            $(this).addClass('hovered');
        }, 
        function() {
            // Mouse leave event
            $(this).removeClass('hovered');
        }
    );
});