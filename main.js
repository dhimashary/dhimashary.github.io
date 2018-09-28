var health, attack, isPlaying, activePlayer;

init();

//variabel yang perlu diassign ketika awal dimulainya game
function init() {
    health = [100, 100];
    attack = 0;
    activePlayer = 0;
    isPlaying = true;

    document.getElementById("name-0").textContent = "Robots";
    document.getElementById("name-1").textContent = "Pirates";
    document.getElementById("attack-0").textContent = 0;
    document.getElementById("attack-1").textContent = 0;
    document.getElementById("health-0").textContent = 100;
    document.getElementById("health-1").textContent = 100;
    document.getElementById("player-0-bar").textContent = 100;
    document.getElementById("player-0-bar").style.width = '100%';
    document.getElementById("player-1-bar").textContent = 100;
    document.getElementById("player-1-bar").style.width = '100%';
    document.getElementById("player-0").classList.remove("bg-warning");
    document.getElementById("player-1").classList.remove("bg-warning");
    document.getElementById("player-0").classList.add("bg-warning");
    document.getElementById("player-0-img").src = "robot.png";
    document.getElementById("player-1-img").src = "pirates.png";
};

function nextPlayer() {
    attack = 0;
    document.getElementById("attack-" + activePlayer).textContent = 0;
    document.getElementById("player-" + activePlayer).classList.remove("bg-warning");
    if (activePlayer === 0) {
        activePlayer = 1;
    } else if (activePlayer === 1) {
        activePlayer = 0;
    }
    document.getElementById("player-" + activePlayer).classList.add("bg-warning");
};

document.getElementById("btn-new").addEventListener("click", init);

document.getElementById("btn-roll").addEventListener("click", function () {
    if (isPlaying) {
        var dice = Math.floor((Math.random() * 6) + 1);
        document.getElementById("dice").src = "dice-" + dice + ".png";
        if (dice !== 1) {
            attack += dice;
            document.getElementById("attack-" + activePlayer).textContent = attack;
        } else {
            nextPlayer();
        }
    } else {
        init();
    }
});

document.getElementById("btn-attack").addEventListener("click", function () {
    if (isPlaying) {
        if (activePlayer === 0) {
            health[1] -= attack;
            if (health[1] < 0) {
                health[1] = 0;
            }
            document.getElementById("player-1-bar").textContent = health[1];
            document.getElementById("player-1-bar").style.width = health[1] + '%';
            document.getElementById("health-1").textContent = health[1];
            if (health[1] > 0) {
                nextPlayer();
            } else {
                isPlaying = false;
                document.getElementById("name-0").textContent = "WINNER !";
                document.getElementById("player-0-img").src = "winner.png";
            }
        } else if (activePlayer === 1) {
            health[0] -= attack;
            if (health[0] < 0) {
                health[0] = 0;
            }
            document.getElementById("player-0-bar").textContent = health[0];
            document.getElementById("player-0-bar").style.width = health[0] + '%';
            document.getElementById("health-0").textContent = health[0];
            if (health[0] > 0) {
                nextPlayer();
            } else {
                isPlaying = false;
                document.getElementById("name-1").textContent = "WINNER !";
                document.getElementById("player-1-img").src = "winner.png";
            }
        }
    } else {
        init();
    }
});