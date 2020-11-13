
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

   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    //  document.getElementById("script-logo").style.width = "170px";
      document.getElementById("script-logo").style.position = "relative";
      document.getElementById("script-logo1").style.position="relative";

    
    } else {
    // document.getElementById("script-logo").style.width = "1000px";
      document.getElementById("script-logo").style.position = "fixed";
  document.getElementById("script-logo1").style.position = "fixed";
  
    }
}



