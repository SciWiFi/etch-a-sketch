var container = document.querySelector("#grid-wrapper");
for(var i = 0; i < 256; i++) {
    var item = document.createElement("div");
    item.className = "grid-item";
    item.id = "grid-item" + i;
    container.appendChild(item);
}

$("#grid-wrapper .grid-item").mouseover(function() {
    $(this).addClass("grid-item-hover");
});

document.querySelector("#clear").addEventListener("click", (e) => {
    prompt("Set new grid size");
});

/*$(".grid-item").one("mouseover", function() {
    $(".grid-item").addClass("grid-item-hover");
});*/