// filename: admin.js
// description: javascript file used to handle switching of tabs exclusively on the admin page, thanks to jQuery

window.onload = function load() {
    changePanel("Songs");
}

// same listener functions as in main.js

let panelClick = (e) => {
    for (let li of panel) {
    changePanel(e.target.dataset.tab);
    }
}
const panel = document.querySelectorAll("li");
for (let li of panel) {
    li.addEventListener("click", panelClick);
}

// function that actually changes the content shown with each tab
function changePanel(panel) {
    document.getElementById("song").className = "hidden";
    document.getElementById("artist").className = "hidden";
    document.getElementById("album").className = "hidden";
    document.getElementById("genre").className = "hidden";
    
    // this switch statement only changes the visibility of the tabs
    // console logs are there to keep track of what tab is supposed to be open
    switch(panel)
    {
        case "Songs":
            document.getElementById("song").className = "";
            console.log("songs page");
            break;
        case "Artists":
            document.getElementById("artist").className = "";
            console.log("artists page");
            break;
        case "Albums":
            document.getElementById("album").className = "";
            console.log("albums page");
            break;
        case "Genres":
            document.getElementById("genre").className = "";
            console.log("genres page");
            break;
    }
}

function pathname() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    return page;
}

// setting up URL
const HOST = "https://cors-anywhere.herokuapp.com/http://192.168.1.225:3000/";
const addsongsURL = HOST.concat('admin/addsong/:songName/:genre/:songLength/:artist/:otherArtist/:album');
const addartistsURL = HOST.concat('admin/addartist');
const addgenresURL = HOST.concat('admin/addgenre');
const addalbumsURL = HOST.concat('admin/addalbum');

// function used to send new song data to the server
function submitSong() {
    // setting variables to elements in the form id="songForm"
    var x = document.getElementById("songForm");
    // elements in the array are as they appear in order in songForm
    var name = x.elements[0].value;
    var genre = x.elements[1].value;
    var length = x.elements[2].value;
    var artist = x.elements[3].value;
    var other = x.elements[4].value;
    var album = x.elements[5].value;
    
    // this is the actual GET request that sends out data
    $.get(addsongsURL,  // the URL to send to
       {
            "songName": name,   // the data written in JSON format to send
            "genreId": genre,
            "songLength":length,
            "artist": artist,
            "otherArtist": other,
            "album": album
        },
        function(data,status){  // this is just a function that lets us know the data was sent
            alert("Data: " + data + "\nStatus: " + status);
        }
    );
}

// function used to send new artist data to the server
function submitArtist() {
    // setting variables to elements in the form id="artistForm"
    var x = document.getElementById("artistForm");
    // elements in the array are as they appear in order in songForm
    var name = x.elements[0].value;
    
    // this is the actual GET request that sends out data
    $.get(addartistsURL,  // the URL to send to
       {
            "artistName": name,   // the data written in JSON format to send
        },
        function(data,status){  // this is just a function that lets us know the data was sent
            alert("Data: " + data + "\nStatus: " + status);
        }
    );
}

// function used to send new album data to the server
function submitAlbum() {
    // setting variables to elements in the form id="artistForm"
    var x = document.getElementById("albumForm");
    // elements in the array are as they appear in order in songForm
    var name = x.elements[0].value;
    var artist = x.elements[1].value;
    var genre = x.elements[2].value;
    var release = x.elements[3].value;
    
    // this is the actual GET request that sends out data
    $.get(addalbumsURL,  // the URL to send to
       {
            "artistName": name,   // the data written in JSON format to send
        },
        function(data,status){  // this is just a function that lets us know the data was sent
            alert("Data: " + data + "\nStatus: " + status);
        }
    );
}

// function used to send new genre data to the server
function submitGenre() {
    // setting variables to elements in the form id="genreForm"
    var x = document.getElementById("genreForm");
    // elements in the array are as they appear in order in songForm
    var name = x.elements[0].value;
    
    // this is the actual GET request that sends out data
    $.get(addgenresURL,  // the URL to send to
       {
            "artistName": name,   // the data written in JSON format to send
        },
        function(data,status){  // this is just a function that lets us know the data was sent
            alert("Data: " + data + "\nStatus: " + status);
        }
    );
}