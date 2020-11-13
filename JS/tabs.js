// filename: tabs.js
// description: javascript file used to handle switching of tabs, thanks to jQuery

// main.js listens until one of the tabs are clicked
// and then runs this, which calls changeTab
let tabClick = (e) => {
    for(let li of tabs)
    {
        li.className = "";
        if(li.dataset.tab == e.target.dataset.tab)
            li.className = "active";
    }
    changeTab(e.target.dataset.tab);
}

//This is going to be used for the searchbar
let searchClick = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
        pageNum = 1;
        for (let li of tabs) {
            if (li.className == "active") {
                changeTab(li.dataset.tab);
            }
        }
    }
}

// just setting things to reduce magic values
let small = document.querySelector("#pageDesc small");
let pages = document.querySelectorAll("main > *")

// function that actually changes the content shown with each tab
function changeTab(tab) {
    pages.forEach(element => {
        element.className = "hidden";
    });

    // changes the caption that describes each tab
    small.innerHTML = "Showing all " + tab + " in the catalog";

    
    switch(tab)
    {
        case "Songs":
            loadSongs();
            pages[0].className = "";
            break;
        case "Artists":
            loadArtists();
            pages[1].className = "";
            break;
        case "Albums":
            loadAlbums();
            pages[2].className = "";
            break;
        case "Genres":
            loadGenres();
            pages[3].className = "";
            break;
        case "Favorites":
            small.innerHTML = "Songs that you\'ve favorited";
            if (pathname() == "index.html"){
                favoritesValid();   // later on this will function only when a user is not logged on
            } else if (pathname() == "user.html") {
                loadFavorites();    // function does not exist atm
            }
            pages[4].className = "";
            break;
    }
}

function pathname() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    return page;
}

// setting up URLs where data lives
const API_HOST = "https://cors-anywhere.herokuapp.com/http://98.10.0.180:3034/"; // where the json data is hosted
let songsURL = API_HOST.concat('songs');
const artistsURL = API_HOST.concat('artists');
const genresURL = API_HOST.concat('genres');
const albumsURL = API_HOST.concat('albums');


// loads in data about Artists when the corresponding tab is clicked
let loadArtists = () => {
    $('#artists').empty();
    $('#artists').append(
    `<th class="liked">❤</th> <th class="artistName">Name</th>`);

    $.getJSON( artistsURL, function( data ) {
        $.each(data, function(i, artist){
            createArtist(artist.artistId, artist.artistName, false);
        });
    });
}


// loads in data about Albums when the corresponding tab is clicked
let loadAlbums = () => {
    $('#albums').empty();
    $('#albums').append(
    `<th class="liked">❤</th>` +
    `<th class="albumName">Album Name</th>` + 
    `<th class="albumArtist">Artist</th>` +
    `<th class="albumGenre">Genre</th>` + 
    `<th class="albumRelease">Release Date</th>` +
    `<th class="albumTracks">No. of Tracks</th>`);

    $.getJSON( albumsURL, function( data ) {
        $.each(data, function(i,album){
            createAlbum(album.albumID, album.albumName, album.artistName, album.genreName,
                                        album.releaseDate, album.trackAmount, false);

        });
    });
}

// loads in data about Genres when the corresponding tab is clicked
let loadGenres = () => {
    $('#genres').empty();
    $('#genres').append(
    `<th class="genreName">Genre</th>` + 
    `<th class="genreSongs">No. of Songs</th>` +
    `<th class="genreAlbums">No. of Albums</th>`);
    
    $.getJSON( genresURL, function( data ) {
        $.each(data, function(i,genre){
            createGenre(genre.genreId, genre.genreName, genre.songsWithGenre, genre.albumsWithGenre);
        });
    });
}


// loads in data about Songs when the corresponding tab is clicked
let loadSongs = () => {
    $('#songs').empty();
    $('#songs').append(
    `<th class="liked">❤</th>` + 
    `<th class="play">Play</th>` + 
    `<th class="songNames">Title</th>` + 
    `<th class="songArtists">Artist</th>` + 
    `<th class="songGenres">Genre</th>` + 
    `<th class="songLengths">Length</th>` + 
    `<th class="songPlays">Times Played</th>`);

    $.getJSON(songsURL, function( data ) {
        $.each(data, function(i,song){
            createSong(song.songId, song.songName, song.artistName, song.genreName, song.songLength, false, 0);
        });
    });
}
