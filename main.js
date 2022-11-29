
let img = document.querySelector(`img`);
function on(){
    img.setAttribute(`src`,`images/on.jpg`);
    playOn();
}
function off(){
    img.setAttribute(`src`,`images/off.jpg`);
    playOff()
}
let playOn = ()=> new Audio(`images/on.mp3`).play();
    
let playOff = ()=> new Audio(`images/off.mp3`).play();
    
