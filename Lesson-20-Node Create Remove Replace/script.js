var boxNumber = 3;
var boxWrapper = document.getElementById("box-wrapper");

function createBox() {
  boxNumber++;
  var box = document.createElement("div");
  var textNode = document.createTextNode(boxNumber.toString());
  box.appendChild(textNode);
  box.classList.add("box");
  boxWrapper.appendChild(box);
  //var selectedBox = document.getElementsByClassName("box").item(2);
  //boxWrapper.insertBefore(box, selectedBox);
}

function removeBox() {
  var boxCount = document.getElementsByClassName("box").length;
  var lastBox = document.getElementsByClassName("box").item(boxCount - 1);
  if (lastBox != null) {
    boxWrapper.removeChild(lastBox);
    //lastBox.remove();
    //boxCount--;
    boxNumber--;
  } else {
    window.alert("Silinecek Kutu Yok");
  }
}

function updateBox() {
  var boxCount = document.getElementsByClassName("box").length;
  var lastBox = document.getElementsByClassName("box").item(boxCount - 1);
  if (lastBox != null) {
    boxNumber++;
    var newBox = document.createElement("div");
    var textNode = document.createTextNode(boxNumber.toString());
    newBox.appendChild(textNode);
    newBox.classList.add("box");
    boxWrapper.replaceChild(newBox, lastBox);
  } else {
    window.alert("Güncellenecek Kutu Yok");
  }
}
