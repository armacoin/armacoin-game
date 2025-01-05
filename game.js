let timer = 60;  // Tempo inicial (em segundos)
let basket = 0;  // Contador de moedas coletadas
let gameInterval;
let fallingItemsInterval;

function startGame() {
    gameInterval = setInterval(updateGame, 1000);
    fallingItemsInterval = setInterval(generateFallingItems, 2000);
}

function updateGame() {
    if (timer > 0) {
        timer--;
        document.getElementById('timer').textContent = `${Math.floor(timer / 60)}:${timer % 60}`;
    } else {
        clearInterval(gameInterval);
        clearInterval(fallingItemsInterval);
        alert('Tempo esgotado! Você coletou ' + basket + ' moedas.');
    }
}

function generateFallingItems() {
    // Aqui você vai gerar os itens que caem na tela
    let item = document.createElement('div');
    item.classList.add('falling-item');
    item.style.top = '0px';
    // Adicionar lógica para escolher moeda ou item errado
    document.getElementById('falling-items').appendChild(item);
}

function watchAd() {
    // Função para assistir ao anúncio e ganhar 30s extras
    if (timer + 30 <= 120) {
        timer += 30;
        alert('Você ganhou 30 segundos!');
    }
}

startGame();  // Iniciar o jogo quando a página carregar
