// Listens to the keydown event and if the 'g' key is pressed, it hides the overlay.
window.addEventListener("keydown", (event) => {
    if(event.key == 'g')
    {
        turnOverlayOff();
    }
});

//Turns the overlay which asks press "g" when ready page.
function turnOverlayOn(){
    document.getElementById("overlay").classList.remove("hidden");
}

//hides it the overlay.
function turnOverlayOff(){
    document.getElementById("overlay").classList.add("hidden");
}
