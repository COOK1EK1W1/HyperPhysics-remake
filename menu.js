function showhidemenu(){
    document.getElementById("topic-list").classList.toggle("active");

    
}

var burger = document.getElementById("hamburger");
burger.addEventListener("click", showhidemenu);


