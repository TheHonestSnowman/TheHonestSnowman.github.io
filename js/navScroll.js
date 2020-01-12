// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if($(window).width() > 900){

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("header").style.padding = "0px 0px";
      document.getElementById("header").style.backgroundColor = "rgb(10, 10, 10)";
      document.getElementById("header_logo").style.width ="60%";
      document.getElementById("header_logo").style.margin ="1rem";

      
    } else {
      document.getElementById("header").style.padding = "0px 0px";
      document.getElementById("header").style.backgroundColor = "";
      document.getElementById("header_logo").style.width ="100%";
      document.getElementById("header_logo").style.margin ="2rem";
      
    }
  }
}

