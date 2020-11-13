// filename: main.js
// description: the main favascript file that listens for when user
//      changes tabs on the menu/nav

window.onload = function load()
{
    changeTab("Songs");
}



const tabs = document.querySelectorAll("#tabs li");
for (let li of tabs) {
    if(li.id == "") {
        li.addEventListener("click", tabClick);
    }
}

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keypress", searchClick);

const searchBtn = document.querySelector("#searchBtn");
searchBar.addEventListener("click", searchClick);