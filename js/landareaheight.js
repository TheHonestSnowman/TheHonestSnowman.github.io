// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onload = function() {height()};

function height() {

  if($(window).width() < 900){

    var headerHeight = $("header").outerHeight();

      document.getElementById("quote").style.padding = "$headerHeight px 0px 0px 0px";

      
    } 
  }
}

