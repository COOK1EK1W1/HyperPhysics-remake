function toggleMenu(){
    document.getElementById("topic-list").classList.toggle("active");
    document.getElementById("grey-out").classList.toggle("active");
}


window.onload = function(){
    var burger = document.getElementById("hamburger"); //check for hamburger clicks
    burger.addEventListener("click", toggleMenu);

    document.location.hash = "";//stop targets
    
}


