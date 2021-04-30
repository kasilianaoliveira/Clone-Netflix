jQuery(function () {
  jQuery(window).scroll(function () {
   if (jQuery(this).scrollTop() > 400) {
    $("header .container ").css('background-color', 'rgba(27, 27, 27, 0.082)');
   } else {
    $("header .container ").css('background-color', '#141414');
   }
  });
 });