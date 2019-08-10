$(document).ready(function () {
   $("#menu li a").on('click', function (e) {
      // prevent default behaviour of the anchor tag
      e.preventDefault();
      // save the data attribute for the anchor tag that was clicked
      var page = $(this).data('page');
      // find the current 'page' element that doesn't have the class .hide -- this is a css selector
      $("#pages .page:not('.hide')").stop().fadeOut('slow', function () {
         // adds .hide to the element that was showing after it has faded out
         $(this).addClass('hide');
         // remove hidden class from element with the same data attribute as the anchor tag
         $('#pages .page[data-page="' + page + '"]').fadeIn('slow').removeClass('hide');
      });
   });
});