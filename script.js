var txt = document.getElementById("disclaimer");
var btn = document.getElementById("play");
var restartFunc = function() {
  btn.classList.remove("hidden");
  btn.classList.add("vibrate");
  txt.classList.add("hidden");
  setTimeout(function() {
    btn.classList.remove("vibrate");
  }, 1500);
};
var time = 48000;
var restart = setTimeout(restartFunc, time);

btn.addEventListener("click", function() {
  clearTimeout(restart);
  btn.classList.add("hidden");
  txt.classList.add("vibrate")
  txt.classList.remove("hidden");
  setTimeout(function() {
    txt.classList.remove("vibrate");
  }, 1500);
  var elm = document.getElementById("container");
  var newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);
  restart = setTimeout(restartFunc, time);
});