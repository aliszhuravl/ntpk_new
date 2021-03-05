
$('.filters_button').on('click', function() {
    $('.filters_box').toggleClass('f_opened');
});

$('.listed').on('click', function() {
    $('.tile_catalog').addClass('style_listed');
});

$('.tiled').on('click', function() {
    $('.tile_catalog').removeClass('style_listed');
});