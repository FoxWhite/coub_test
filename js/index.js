jQuery(document).ready(function($) {
    
    $('.viewSelector').click(function(event) {
            $('.viewSelector').toggleClass('active');

            changeCoubsView();
    });

    function changeCoubsView() {
        console.log('changing coubs layout...');
        var $coubs = $('.coubs-list');
        $coubs.attr('view') === 'list' ?
            $coubs.attr('view', 'grid') :
                $coubs.attr('view', 'list');

        var left = 0;
        var right = 0;
        var offset_top = -164;
        var offset_left = -159;

        $('.coub-block').each(function(index){
            if((index) % 2 === 0){ //right col
                $(this).css({
                    'top': (right * 310) + offset_top + 'px',
                    'left': 336 + offset_left + 'px'
                });

                right +=1;
            }
            else { // left col
                $(this).css({
                    'top': (left * 310) + offset_top + 'px',
                    'left': 0 + offset_left + 'px'
                });

                left +=1;
            }
        });
    }


});