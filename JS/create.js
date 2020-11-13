// filename: create.js
// description: javascript file where all the functions to create nodes live

// creates a new album row
let createAlbum = (id, title, artist, genre, release, tracks, liked) =>
{
    $('#albums').append(    // selects the album table
        $('<tr><tr/>').append(  // creates a new row and the following gets appended to it:
            $('<td/>', {"class": "liked"}).append(
                $('<input/>', { "type": "checkbox", "class" : "heart", "checked" : liked}),
                $('<label/>', { "class": "container", "class" : "heart"}).text('❤')
            ),
            $('<td/>', {"class": "albumName"}).text(title),
            $('<td/>', {"class": "albumArtist"}).text(artist),
            $('<td/>', {"class": "albumGenre"}).text(genre),
            $('<td/>', {"class": "albumRelease"}).text(release),
            $('<td/>', {"class": "albumTracks"}).text(tracks)
        ).attr('id', id)
    );
}

// creates a new genre row
let createGenre = (id, genre, songs, albums) => {
    $('#genres').append(    // selects the genres table
        $('<tr><tr/>').append(  // creates a new row and the following gets appended to it:
            $('<td/>', {"class": "genreName"}).text(genre),
            $('<td/>', {"class": "genreSongs"}).text(songs),
            $('<td/>', {"class": "genreAlbums"}).text(albums)
        ).attr('id', id)
    );
}

// creates a new song row
let createSong = (id, title, artist, genre, length, liked, plays) => {
    var minutes = Math.floor(length / 60);
    var seconds = length - minutes * 60;
    function str_pad_left(string,pad,lengths) {
        return (new Array(lengths+1).join(pad)+string).slice(-lengths);
    }



    //var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
    $('#songs').append(   // selects the songs table
        $('<tr></tr>', {"id": "like" + id}).append(  // creates a new row and the following gets appended to it:
            $('<td/>', {"class": "liked"}).append(
                $('<input/>', { "type": "checkbox", "class" : "heart", "checked" : liked}),
                $('<label/>', { "class": "container", "class" : "heart"}).text('❤')
            ),
            $('<td/>', {"class": "play"}, {"id": "play" + id}).text('▶︎'),
            $('<td/>', {"class": "songNames"}).text(title),
            $('<td/>', {"class": "songArtists"}).text(artist),
            $('<td/>', {"class": "songGenres"}).text(genre),
            $('<td/>', {"class": "songLengths"}).text(str_pad_left(minutes,' ',2) + ':'
                + str_pad_left(seconds,'0',2)),
            $('<td/>', {"class": "songPlays"}).text(plays),
        ).attr('id', id)
    );
}

// creates a new artist row
let createArtist = (id, name, liked) => {
    $('#artists').append(   // selects the artists table
        $('<tr></tr>').append(  // creates a new row and the following gets appended to it:
            $('<td/>', {"class": "liked"}).append(
                $('<input/>', { "type": "checkbox", "class" : "heart", "checked" : liked}),
                $('<label/>', { "class": "container", "class" : "heart"}).text('❤')
        ), $('<td/>', {"class":"artistName"}).text(name)).attr('id', id)
    );
}