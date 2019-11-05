var cart = document.querySelector(".cart");

var itemName1 = document.createElement("span");
var itemName2 = document.createElement("span");
var itemName3 = document.createElement("span");
itemName1.innerText = "first";
itemName2.innerText = "second";
itemName3.innerText = "third";


var firstCountSpan = document.createElement("span");
var secondCountSpan = document.createElement("span");
var thirdCountSpan = document.createElement("span");

var firstButton = document.getElementById("first");
var secondButton = document.getElementById("second");
var thirdButton = document.getElementById("third");

var thirdCount = 0;
var firstCount = 0;
var secondCount = 0;


cart.appendChild(itemName1);
cart.appendChild(firstCountSpan);
cart.appendChild(itemName2);
cart.appendChild(secondCountSpan);
cart.appendChild(itemName3);
cart.appendChild(thirdCountSpan);

firstButton.addEventListener("click", function () {
    firstCount++;

    firstCountSpan.innerText = firstCount;
});

secondButton.addEventListener("click", function () {
    secondCount++;

    secondCountSpan.innerText = secondCount;
});


thirdButton.addEventListener("click", function () {
    thirdCount++;

    thirdCountSpan.innerText = thirdCount;
});

var spans = document.getElementsByTagName("span");
for(var i = 0; i < spans.length;i++) {
    spans[i].className.add(".item");
}