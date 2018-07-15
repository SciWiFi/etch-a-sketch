var container = document.querySelector("#grid-wrapper");
var gridSize = 16;

function initializeGrid() {
    container.innerHTML = "";
    container.style.setProperty("grid-template-columns", `repeat(${gridSize}, 1fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${gridSize}, 1fr`);
    for(var i = 0; i < gridSize * gridSize; i++) {
        var item = document.createElement("div");
        item.className = "grid-item";
        item.id = "grid-item" + i;
        item.style.width = 320 / gridSize;
        item.style.height = 320 / gridSize;
        container.appendChild(item);
    }
    //container.style.gr
    const items = document.querySelectorAll(".grid-item");
        console.log(items);
        for(var i = 0; i < items.length; i++) {
            items[i].style.width = 320 / gridSize;
            items[i].style.height = 320 / gridSize;
            items[i].style.opacity = 0;
            items[i].addEventListener("mouseover", function(e) {
                console.log(i);
                if(this.style.opacity != 0 && this.style.opacity != 1) {
                    this.style.opacity = parseFloat(this.style.opacity) + 0.1;
                }
                else if(this.style.opacity != 1) {
                    this.style.opacity = 0.1;
                }
            });
        }
        
}



initializeGrid();
/*$("#grid-wrapper .grid-item").mouseover(function() {
    $(this).addClass("grid-item-hover");
    $(this).find(".grid-item-hover").css("opacity", "0.1");
});*/

document.querySelector("#clear").addEventListener("click", (e) => {
    gridSize = prompt("Set new grid size");
    initializeGrid();
});

/*$(".grid-item").one("mouseover", function() {
    $(".grid-item").addClass("grid-item-hover");
});*/