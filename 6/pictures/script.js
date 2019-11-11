var bigImg = document.createElement("img");
var bigDiv = document.getElementById("big");
window.onload = function () {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showBig;
    }
};

function showBig(eventObj) {
    bigDiv.innerText = "";
    var targetImg = eventObj.target;
    var name = targetImg.id;
    name = "img/" + name + " big.png"
    bigImg.src = name;
    bigImg.onload = () => bigDiv.appendChild(bigImg);
    bigImg.onerror = () => bigDiv.innerText = "file doesn't exist";
}