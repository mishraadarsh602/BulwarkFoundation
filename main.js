
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};   
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("fixx2").style.width = "170px";
    document.getElementById("fixx2").style.height = "60px";
  } else {
    document.getElementById("fixx2").style.width = "1000px";
    document.getElementById("fixx2").style.height = "300px";
  }

 



