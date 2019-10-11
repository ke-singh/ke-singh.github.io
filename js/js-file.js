//-----------------------------------------------------------------------//

//for blur effect

var myElement = $(".top");
$(window).on("scroll", function() {
  var st = $(this).scrollTop();
  myElement.css({
    opacity: 0.2 + st / 400
  });
});

//for tooltip in social media icons

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
