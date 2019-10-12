//-----------------------------------------------------------------------//

//for blur effect

var myElement = $(".top");
$(window).on("scroll", function() {
  var st = $(this).scrollTop();
  var blurValue = 30 - st / 5;
  myElement.css({
    filter: "blur(" + blurValue + "px)"
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

function languageAnimationHandler() {
  var y = $(this).scrollTop();
  var x = $("#third").position().top;

  if (y > x - 850) {
    $("#blue").addClass("blue");
    $("#yellow").addClass("yellow");
    $("#pink").addClass("pink");
    $("#green").addClass("green");
  }
  if (y < x - 850 || y > x + 569) {
    $("#blue").removeClass("blue");
    $("#yellow").removeClass("yellow");
    $("#pink").removeClass("pink");
    $("#green").removeClass("green");
  }
}
$(document).ready(function() {
  languageAnimationHandler();
});

$(document).scroll(function() {
  languageAnimationHandler();
});

function playAudio(url) {
  var a = new Audio(url);
  a.play();
}
