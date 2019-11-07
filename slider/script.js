var imgArray = document.getElementsByClassName("img");
imgArray[0].src = "img/first.png";
imgArray[1].src = "img/second.png"
imgArray[2].src = "img/third.png";

var i = 0;
var fwdButton = document.createElement("button");
var backButton = document.createElement("button");
var img = document.createElement("img");
img = imgArray[0];
fwdButton.setAttribute("id", "f");
backButton.setAttribute("id", "b");
fwdButton.innerText = "forward";
backButton.innerText = "back";
var div = document.createElement("div");
div.appendChild(img);
div.appendChild(backButton);
div.appendChild(fwdButton);
document.body.appendChild(div);


fwdButton.addEventListener("click", changePhoto(this));

function changePhoto(button) {
    if (button.id == "f") {
        img.classList.add("visible");
    } else {
        
    }
}