// Form ready event
document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('gname').value.trim();
    let year = document.getElementById('year').value.trim();
    let genre = document.getElementById('genre').value.trim();
    let platform = document.getElementById('platform').value;
    let rating = document.getElementById('score').value.trim();
    
    if (!name || !year || !genre || !platform || !rating) {
        alert('Todos os campos são obrigatórios!');
        return;
    }
    
    if (isNaN(year) || year < 1970 || year > new Date().getFullYear()) {
        alert('Ano inválido!');
        return;
    }
    
    let game = { name, year, genre, platform, rating };
    saveGame(game);
    renderTable();
    this.reset();
});

// Save game to local storage
function saveGame(game) {
    let games = JSON.parse(localStorage.getItem('games')) || [];
    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
}

// Render table with games
function renderTable() {
    let gameList = document.getElementById('gameList');
    gameList.innerHTML = '';
    let games = JSON.parse(localStorage.getItem('games')) || [];
    
    games.forEach((game, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${game.gname}</td>
            <td>${game.year}</td>
            <td>${game.genre}</td>
            <td>
                <button onclick="viewDetails(${index})">Ver detalhes</button>
                <button onclick="removeGame(${index})">Remover</button>
            </td>
        `;
        gameList.appendChild(row);
    });
}

// View game details
function viewDetails(index) {
    let games = JSON.parse(localStorage.getItem('games')) || [];
    let game = games[index];
    alert(`Nome: ${game.name}\n Ano: ${game.year}\n Género: ${game.genre}\n Plataforma: ${game.platform}\n Avaliação: ${game.rating}`);
}

// Remove game from local storage
function removeGame(index) {
    let games = JSON.parse(localStorage.getItem('games')) || [];
    games.splice(index, 1);
    localStorage.setItem('games', JSON.stringify(games));
    renderTable();
}

// Filter games
function filterGames() {
    let filterGenre = document.getElementById('filterGenre').value.trim().toLowerCase();
    let filterPlatform = document.getElementById('filterPlatform').value.trim().toLowerCase();
    let gameList = document.getElementById('gameList');
    gameList.innerHTML = '';
    
    let games = JSON.parse(localStorage.getItem('games')) || [];
    let filteredGames = games.filter(game => 
        (filterGenre ? game.genre.toLowerCase().includes(filterGenre) : true) &&
        (filterPlatform ? game.platform.toLowerCase().includes(filterPlatform) : true)
    );
    
    filteredGames.forEach((game, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${game.name}</td>
            <td>${game.year}</td>
            <td>${game.genre}</td>
            <td>
                <button onclick="viewDetails(${index})">Ver detalhes</button>
                <button onclick="removeGame(${index})">Remover</button>
            </td>
        `;
        gameList.appendChild(row);
    });
}

// Ensure data persists after refresh
window.onload = function() {
    renderTable();
};
