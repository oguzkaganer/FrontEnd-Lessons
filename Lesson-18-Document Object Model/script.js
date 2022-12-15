var text1 = document.getElementById("text").innerHTML;
var text2 = document.getElementById("text").innerText;
var text3 = document.getElementById("text").outerHTML;
var text4 = document.getElementById("text").outerText;
var text5 = document.getElementById("text").textContent;

console.log("innerHTML   : " + text1);
console.log("innerText   : " + text2);
console.log("outerHTML   : " + text3);
console.log("outerText   : " + text4);
console.log("textContent : " + text5);

var elements = document.getElementsByTagName("h1");

console.log(elements);
console.log("item 0 : " + elements.item(0).innerHTML);

var elements1 = document.getElementsByClassName("main")[0];
var sayi = elements1.childElementCount;

console.log("bu : " + elements1.children[sayi - 1].innerHTML);

var box = document.getElementsByClassName("box")[0];

// box.style.width = "150px";
// box.style.height = "150px";
// box.style.backgroundColor = "blue";

function tıkla() {
  box.classList.contains("border") == true
    ? box.classList.remove("border")
    : box.classList.add("border");
}
