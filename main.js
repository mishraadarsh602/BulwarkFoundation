
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};   
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
  document.getElementById("fixx2").style.width = "170px";
    document.getElementById("fixx2").style.height = "60px";
  } else {
   document.getElementById("fixx2").style.width = "70%";
    document.getElementById("fixx2").style.height = "40%";
  }

 
  if (document.body.scrollTop >780 || document.documentElement.scrollTop >780) {
    document.getElementById("script-logo").style.display = "none";
      document.getElementById("script-logo1").style.display = "none";
     
    } else {
     document.getElementById("script-logo").style.display = "block";
      document.getElementById("script-logo1").style.display = "block";
    }
}



