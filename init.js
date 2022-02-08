function toggleMenu(){
    document.getElementById("topic-list").classList.toggle("active");
    document.getElementById("grey-out").classList.toggle("active");
}

function closeMenu(){
    document.getElementById("topic-list").classList.remove("active");
    document.getElementById("grey-out").classList.remove("active");
}


window.onload = function(){
    var burger = document.getElementById("hamburger"); //check for hamburger clicks
    burger.addEventListener("click", toggleMenu);

    // document.location.hash = "";//stop targets


    var toggler = document.getElementsByClassName("arrow");
    for (var i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("arrow-down");
    });
    }

    var links = document.getElementsByTagName("a");
    for (var i = 0; i<links.length; i++){
        links[i].addEventListener("click", closeMenu)
    }
}


