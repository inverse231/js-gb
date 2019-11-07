var imgArray = document.getElementsByClassName("img");
imgArray[0].src = "img/first.png";
imgArray[1].src = "img/second.png"
imgArray[2].src = "img/third.png";

var i = 0;
var fwdButton = document.createElement("button");
var backButton = document.createElement("button");
var img = document.createElement("img");
fwdButton.setAttribute("id", "f");
backButton.setAttribute("id", "b");
fwdButton.innerText = "forward";
backButton.innerText = "back";
var div = document.createElement("div");
imgArray[0].classList.add("visible");
div.appendChild(img);
div.appendChild(backButton);
div.appendChild(fwdButton);
document.body.appendChild(div);




fwdButton.addEventListener("click", function () {

    if (i == imgArray.length) {
        imgArray[i].classList.remove("visible");
        i = 0;
        imgArray[i].classList.add("visible");
    } else {
        imgArray[i].classList.remove("visible");
        imgArray[++i].classList.add("visible");
    }
    console.log(i, imgArray.length);
});

backButton.addEventListener("click", function () {


});

function changePhoto(button) {
    if (button.id == "f") {
        imgArray[i++].classList.remove("visible");
        imgArray[i - 1].classList.add("visible");
    } else {

    }
}