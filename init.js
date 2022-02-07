function showhidemenu(){
    document.getElementById("topic-list").classList.toggle("active");
}


window.onload = function(){
    var burger = document.getElementById("hamburger"); //check for hamburger clicks
    burger.addEventListener("click", showhidemenu);

    document.location.hash = "";//stop targets
    
}


