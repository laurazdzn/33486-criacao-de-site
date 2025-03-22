document.addEventListener("DOMContentLoaded", function() {
    // ID do Spotify da música "Loud and Clear"
    let trackID = "5r8skcDoiyjfagGCwQLKsQ"; // Seu Track ID

    // Atualiza o iframe com a música escolhida
    let spotifyPlayer = document.getElementById("spotify-player");
    if (spotifyPlayer) {
        spotifyPlayer.src = `https://open.spotify.com/embed/track/5r8skcDoiyjfagGCwQLKsQ`;
    } else {
        console.error("Elemento #spotify-player não encontrado.");
    }

    // Adiciona funcionalidade para pesquisa de banda
    let searchBar = document.querySelector(".search-bar");
    if (searchBar) {
        searchBar.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                let query = event.target.value.trim();
                if (query) {
                    alert(`Buscando informações sobre: ${query}`);
                    // Aqui você pode adicionar lógica para buscar a banda digitada
                }
            }
        });
    } else {
        console.error("Elemento .search-bar não encontrado.");
    }
});