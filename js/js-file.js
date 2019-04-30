
//-----------------------------------------------------------------------//



//for blur effect

var myElement = $('.top');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity' : 0.2 + st/400
    });
});

var Element = $('.intro');
$(window).on('scroll', function() {
    var t = $(this).scrollTop();
    Element.css({
        'opacity' : 1 - t/4000
    });
});



//-----------------------------------------------------------------------//



//for tooltip in social media icons


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });








//-----------------------------------------------------------------------//

// for parallax effect


var velocity = 0.5;
function update(){ 
      var pos = $(this).scrollTop(); 
      $('.container1').each(function() { 
          var $element = $(this);
          // subtract some from the height b/c of the padding
          var height = $element.height()-18;
          $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
      });
      $('.container2').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var heigh = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round((heigh - pos) * velocity) + 'px'); 
    });  
  };
$(window).bind('scroll', update);
  

//-----------------------------------------------------------------------//