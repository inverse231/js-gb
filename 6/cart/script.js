var itemObject1 = {
    name: "first",
    price: "100",
    src: "img/first.png",
    count: 0
}

var itemObject2 = {
    name: "second",
    price: "50",
    src: "img/second.png",
    count: 0
}

var itemObject3 = {
    name: "third",
    price: "200",
    src: "img/third.png",
    count: 0
}

var itemArray = [itemObject1, itemObject2, itemObject3];
var sum = 0;
var cart = document.querySelector(".cart");
var sumDiv = document.createElement("div");
var sumSpan = document.createElement("span");
sumDiv.appendChild(sumSpan);
cart.appendChild(sumSpan);

function init() {
    var catalog = document.querySelector(".catalog");
    for (var i = 0; i < itemArray.length; i++) {
        var item = document.createElement("div");

        var itemImg = document.createElement("img");
        itemImg.src = itemArray[i].src;
        item.appendChild(itemImg);

        item.appendChild(document.createTextNode(itemArray[i].name));

        var itemBtn = document.createElement("button");
        itemBtn.setAttribute("id", i);
        itemBtn.onclick = addItem;
        itemBtn.innerText = "buy";
        item.appendChild(itemBtn);

        item.classList.add("item");
        catalog.appendChild(item);
    }
}

function addItem(obj){
    var selectedItem = itemArray[(obj.target.id)];
    var itemName = selectedItem.name;
    sum += parseInt(selectedItem.price);

    sumSpan.innerText = "Summary "+parseInt(sum);

    var cartItem = document.createElement("div");
    cartItem.appendChild(document.createTextNode(itemName));
    cartItem.classList.add("cartItem");
    cart.appendChild(cartItem);
}

window.onload = init;