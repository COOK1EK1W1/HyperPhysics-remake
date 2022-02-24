function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchOptions"); //get unordered list
    li = ul.getElementsByTagName('li'); //get list items

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0]; //get hyperlinks
        txtValue = a.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }

        if(input.value.length == 0)
        {
            li[i].style.display = "none";
        }
    }
}