let scores = { home: 0, guest: 0 };

function addScore(team, points) {
    scores[team] += points;
    document.getElementById(team + "-score").textContent = scores[team];
    updateLeader();
}

function newGame() {
    scores = { home: 0, guest: 0 };
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
    document.getElementById("home-team").classList.remove("leader");
    document.getElementById("guest-team").classList.remove("leader");
}

function updateLeader() {
    const home = document.getElementById("home-team");
    const guest = document.getElementById("guest-team");

    home.classList.remove("leader");
    guest.classList.remove("leader");

    if (scores.home > scores.guest) {
        home.classList.add("leader");
    } else if (scores.guest > scores.home) {
        guest.classList.add("leader");
    }
}

function changeTheme(theme) {
    document.body.className = "theme-" + theme;
}
