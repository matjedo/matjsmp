function createBlock() {
    const block = document.createElement("div");
    block.style.position = "fixed";
    block.style.width = "20px";
    block.style.height = "20px";
    block.style.background = "#4CAF50";
    block.style.left = Math.random() * window.innerWidth + "px";
    block.style.top = "-20px";
    block.style.opacity = Math.random() * 0.8 + 0.2;
    block.style.border = "1px solid #000";
    block.style.borderRadius = "2px";
    document.getElementById("particles").appendChild(block);

    let top = -20;
    const fall = setInterval(() => {
        top += 4;
        block.style.top = top + "px";
        if(top > window.innerHeight){
            block.remove();
            clearInterval(fall);
        }
    }, 20);
}

setInterval(createBlock, 150);
