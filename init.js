function toggleMenu(){
    document.getElementById("slide-menu").classList.toggle("active");
    document.getElementById("grey-out").classList.toggle("active");
    closeCategories()
}

function closeMenu(){
    document.getElementById("slide-menu").classList.remove("active");
    document.getElementById("grey-out").classList.remove("active");
    closeCategories();
}

function openMenu(){
    document.getElementById("slide-menu").classList.add("active");
    document.getElementById("grey-out").classList.add("active");
}

function openMenuWith(category){
    openMenu();
    closeCategories();
    var cat = document.getElementById(category);
    if (cat){
        var arrow = cat.getElementsByClassName("arrow");
        arrow[0].classList.add("arrow-down");
        var catList = cat.getElementsByClassName("nested");
        catList[0].classList.add("active");
    }else{
        throw "not a category";
    }
}

function closeCategories(){
    var cat = document.getElementById("topic-list");
    for (var i = 0; i < cat.children.length; i++){
        cat.children[i].getElementsByClassName("arrow")[0].classList.remove("arrow-down");
        cat.children[i].getElementsByClassName("nested")[0].classList.remove("active");       

    }
}

window.onload = () => {
    var burger = document.getElementById("hamburger"); //check for hamburger clicks
    burger.addEventListener("click", toggleMenu);


    var toggler = document.getElementsByClassName("arrow");//check for category clicks
    for (var i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("arrow-down");
    });
    }

    
    // hide all list items initially
    ul = document.getElementById("searchOptions"); //get unordered list
    li = ul.getElementsByTagName('li'); //get list items
    for (i = 0; i < li.length; i++)
    {
        li[i].style.display = "none";
    }
}


