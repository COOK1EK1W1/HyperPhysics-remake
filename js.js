function showhidemenu(){
    var menudiv = document.getElementById("topic-list");
    if (menudiv.style.display == "block"){
        menudiv.style.display = "None";
    }else{
        menudiv.style.display = "block";
    }
}

var burger = document.getElementById("hamburger");
burger.addEventListener("click", showhidemenu);


