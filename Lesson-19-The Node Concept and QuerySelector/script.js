// 1 . Node Concept
//console.log(elements1.previousSibling.innerHTML);

// var c = document.getElementById("wrapper").childNodes;

// var c = document.getElementById("wrapper").firstChild;

// var c = document.getElementById("wrapper").lastChild;

// var c = document.getElementById("container").firstChild;

// var c = document.getElementById("box").childNodes;

// var c = document.getElementById("box").childNodes.length;

// var c = document.getElementById("box").childNodes[1].textContent;

// var c = document.getElementById("box").childNodes[1].nodeName;

// var c = document.getElementById("box").childNodes[1].nodeType; //??

// var c = document.getElementById("box").childNodes[1].childNodes[0].nodeValue; //??

//console.log(c);

// console.log(document.body);
// console.log(document.documentElement);

// 2. querySelector AND querySelectorAll
function tıkla1() {
  var item = document.querySelector(".box");
  item.style.color = "red";
}

function tıkla2() {
  var items = document.querySelectorAll(".box2");
  items.forEach((element) => {
    element.style.color = "red";
  });
}
