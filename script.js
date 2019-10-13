document.addEventListener("DOMContentLoaded", start);

function start() {
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() { //denne funktionen får burgermenuen til at virke
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
