<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- these are all linking in css (styles) for the page to look pretty and all -->
        <link rel="stylesheet" href="../css/style.css" />
        <link rel="stylesheet" href="../css/header.css" />
        <link rel="stylesheet" href="../css/artist.css" />
        <link rel="stylesheet" href="../css/genres.css" />
        <link rel="stylesheet" href="../css/album.css" />
        <link rel="stylesheet" href="../css/song.css" />
        <!-- this css is used for user profile 'image' -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- bootstrap css used to style the nav tabs -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <!-- script using jquery so things actually function... -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        
        <title>CSCI320 Project</title>
    </head>
    <!-- this page index.html is where the songs are loaded in -->
    <body>
        <!-- this part is the very top portion that spans the width -->
        <header class="header" id="banner">
            <!-- the site name, top left -->
            <a href="../index.html">
                <h1>CovidCarriers Epic Music</h1>
            </a>
            <!-- user links, top right -->
            <a href="user.php" class="active">
                <h2><i class="fa fa-user"> <?php echo "{$_SERVER['givenName']} {$_SERVER['sn']}"; ?></i></h2>
            </a>
            <a href="#" onclick="notAvailable()">
                <h2><i class="fa fa-user"> Admin</i></h2>
            </a>
        </header>
        <!-- this div is where the tabs for songs/artists/albums/etc lives -->
        <div class="container" id="tabs">
            <ul class="nav nav-pills nav-justified">
                <li><a data-tab="Songs">Songs</a></li>
                <li><a data-tab="Artists">Artists</a></li>
                <li><a data-tab="Albums">Albums</a></li>
                <li><a data-tab="Genres">Genres</a></li>
                <li><a data-tab="Favorites">My Favorites</a></li>
            </ul>
        </div>
        <div id="pageDesc">
            <!-- the small caption that describes the page, text changes depending on what page is loaded -->
            <small>Showing all Songs in the catalog</small>
        </div>
        <main>
            <!-- this is where actual content is supposed to load in -->
            <div id="songTab">
                <!-- shows when "Songs" is selected, otherwise hidden -->
                <table id="songs">
                </table>
            </div>
            <div id="artistTab">
                <!-- shows when "Artists" is selected, otherwise hidden -->
                <table id="artists">
                </table>
            </div>
            <div id="albumTab">
                <!-- shows when "Albums" is selected, otherwise hidden -->
                <table id="albums">
                </table>
            </div>
            <div id="genreTab">
                <!-- shows when "Genres" is selected, otherwise hidden -->
                <table id="genres">
                </table>
            </div>
            <div id="favoritesTab">
                <!-- shows when "Playlists" is selected, otherwise hidden -->
                <table id="favorites">
                </table>
            </div>
        </main>
        <!-- links to script used to handle changing of tabs -->
        <script src="../JS/create.js"></script>
        <script src="../JS/tabs.js"></script>
        <script src="../JS/main.js"></script>
        <script src="../JS/user.js"></script>
    </body>
</html