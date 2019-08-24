$(document).ready(function () {
    $('#menu_sculptures').click(function() {
        $('#menu_sculptures').addClass('menu-selected');
        $('#menu_paintings,#menu_drawings,#menu_about').removeClass('menu-selected');
    });

    $('#menu_paintings').click(function() {
        $('#menu_paintings').addClass('menu-selected');
        $('#menu_sculptures,#menu_drawings,#menu_about').removeClass('menu-selected');
    });

    $('#menu_drawings').click(function() {
        $('#menu_drawings').addClass('menu-selected');
        $('#menu_sculptures,#menu_paintings,#menu_about').removeClass('menu-selected');
    });

    $('#menu_about').click(function() {
        $('#menu_about').addClass('menu-selected');
        $('#menu_paintings,#menu_drawings,#menu_sculptures').removeClass('menu-selected');
    });
});
