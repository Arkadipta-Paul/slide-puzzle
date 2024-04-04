var rows = 3;
var columns = 3;
var currTile;
var otherTile;
var turns = 0;
//var realOrder = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];
var imgOrder = ["img4", "img2", "img8", "img5", "img1", "img6", "img7", "img9", "img3"];


window.onload = function() {
    for (let r=0; r < rows; r++) {
        for(let c=0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() +  "-" + c.toString();
            tile.src = imgOrder.shift() + ".png";
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            document.getElementById("board").append(tile);
            // if(checkWin()) {
            //     console.log("win");
            // }
        }
    }
}

// function checkWin() {
    
// }

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {

    if(!otherTile.src.includes("img1.png")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r1 = parseInt(currCoords[0]);
    let c1 = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r1 == r2 && c2 == c1 - 1;
    let moveRight = r1 == r2 && c2 == c1 + 1;
    let moveUp = c1 == c2 && r2 == r1 - 1;
    let moveDown = c1 == c2 && r2 == r1 + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if(isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }

}

