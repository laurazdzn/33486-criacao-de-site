document.addEventListener("DOMContentLoaded", function() {
    let trackID = "5r8skcDoiyjfagGCwQLKsQ"; 

    let spotifyPlayer = document.getElementById("spotify-player");
    if (spotifyPlayer) {
        spotifyPlayer.src = `https://open.spotify.com/embed/track/5r8skcDoiyjfagGCwQLKsQ`;
    } else {
        console.error("Elemento #spotify-player não encontrado.");
    }

    let searchBar = document.querySelector(".search-bar");
    if (searchBar) {
        searchBar.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                let query = event.target.value.trim();
                if (query) {
                    alert(`Buscando informações sobre: ${query}`);
                }
            }
        });
    } else {
        console.error("Elemento .search-bar não encontrado.");
    }
});