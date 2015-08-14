jQuery(document).ready(function($) {
    
    $('.viewSelector').click(function(event) {
            $('.viewSelector').toggleClass('active');

            changeCoubsView();
    });

    function changeCoubsView() {
        console.log('changing coubs layout...');
    }

});