let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let img  = document.getElementById("img")

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        img.src = "Icons/close.png";      
    } else {
        sideNav.style.right = "-250px";
        img.src = "Icons/hamburger.png";
    }
} 
/*--scroll--*/

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});







  