
window.addEventListener("keydown", (event) => {
    if(event.key == 'g')
    {
        turnOverlayOff();
    }
});

function turnOverlayOn(){
    document.getElementById("overlay").classList.remove("hidden");
}

function turnOverlayOff(){
    document.getElementById("overlay").classList.add("hidden");
}
