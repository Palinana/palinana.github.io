// Words animation ====
const words = ["passionate", "innovative ", "committed"];

function rotateTerm() {
  var ct = $("#words").data("term") || 0;
  $("#words").data("term", ct == words.length -1 ? 0 : ct + 1).text(words[ct]).fadeIn()
    .delay(2000).fadeOut(200, rotateTerm);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $(rotateTerm);
})

// Scroll Up Buton ====
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 70) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}