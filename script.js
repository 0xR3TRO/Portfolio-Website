// Scripts and functions on this page are the creation of 0xR3TR0. All rights reserved. 
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "Images/sun.png";
    }
    else{
        icon.src = "Images/moon.png";
    }
}