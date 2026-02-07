const londonText = document.getElementById("tab1-content");
const parisText = document.getElementById("tab2-content");
const tokyoText = document.getElementById("tab3-content");
const londonButton = document.getElementById("tab1-button");
const parisButton = document.getElementById("tab2-button");
const tokyoButton = document.getElementById("tab3-button");

function londonButtonClick() {
    londonText.classList.remove("display-none");
    parisText.classList.add("display-none");
    tokyoText.classList.add("display-none");
    londonButton.classList.add("background-color-green");
    parisButton.classList.remove("background-color-green");
    tokyoButton.classList.remove("background-color-green");
}

function parisButtonClick() {
    parisText.classList.remove("display-none");
    londonText.classList.add("display-none");
    tokyoText.classList.add("display-none");
    parisButton.classList.add("background-color-green");
    londonButton.classList.remove("background-color-green");
    tokyoButton.classList.remove("background-color-green");
}

function tokyoButtonClick() {
    tokyoText.classList.remove("display-none");
    parisText.classList.add("display-none");
    londonText.classList.add("display-none");
    tokyoButton.classList.add("background-color-green");
    parisButton.classList.remove("background-color-green");
    londonButton.classList.remove("background-color");
}

