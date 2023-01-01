function getDate() {
  document.getElementById("paragraf").innerHTML = "Tarih:" + Date();
}

document.getElementById("btnMessage").onclick = function getMessage() {
  window.alert("Merhaba");
  getDate();
}

var box = document.getElementById("box");

box.addEventListener("click", function alert() {
  window.alert("Hello Alperen!");
})

box.addEventListener("mouseover", function () { changeColor("yellow") });
box.addEventListener("mouseout", function () { changeColor("coral") });


function changeColor(color) {
  box.style.backgroundColor = color;
}

var parentBox = document.getElementById("parent-box");
var childBox = document.getElementById("child-box");

parentBox.addEventListener("click", function a() {
  window.alert("parent element clicked");
},false);

childBox.addEventListener("click", function (event) {
  window.alert("child element clicked");
  event.stopPropagation();
}, false);

var link = document.getElementById("link");
link.addEventListener("click", function (e) {
  window.alert("a etiketine tıklandı");
  e.preventDefault();
})