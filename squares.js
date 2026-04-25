var topZIndex = 1; //6
window.onload = function () { //3
    var squareCount = parseInt(Math.random() * 21) + 30;
    for (var i = 0; i < squareCount; i++) {
        addSquare();
    }
document.getElementById("addSquare").onclick = addSquare;
    document.getElementById("changeColors").onclick = changeColors; //2
}

function addSquare() { //4
    var squareArea = document.getElementById("squarearea");
    var square = document.createElement("div");
    square.className = "square";
    var size = parseInt(Math.random() * 11) + 45; //5
square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.left = parseInt(Math.random() * (700 - size)) + "px";
    square.style.top = parseInt(Math.random() * (300 - size)) + "px";
    square.style.backgroundColor = getRandomColor();
    square.onclick = squareClick; //6
    squareArea.appendChild(square);
}
function squareClick() { //6
    if (this.style.zIndex == topZIndex) {
        this.parentNode.removeChild(this);
    } else {
        topZIndex++;
        this.style.zIndex = topZIndex;
    }
}
function changeColors() { //7
    var allSquares = document.querySelectorAll(".square");
for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}
function getRandomColor() {
    var letters = "0123456789ABCDEF";
var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(Math.random() * letters.length));
    }

    return color;
}