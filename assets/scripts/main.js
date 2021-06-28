var menubtn =document.getElementById("menubtn");
var sidenav =document.getElementById("sidenav");

sidenav.style.right = "-250px";
menubtn.onclick = function(){
    if(sidenav.style.right =="-250px"){
        sidenav.style.right = "0px";
    }
    else {
        sidenav.style.right = "-250px"
    }
}

