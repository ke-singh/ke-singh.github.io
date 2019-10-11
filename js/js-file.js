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

$(document).ready(function() {
  $(".progress-value > span").each(function() {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text()
        },
        {
          duration: 3500,
          easing: "swing",
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        }
      );
  });
});
