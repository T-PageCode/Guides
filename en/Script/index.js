document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const leftBar = document.getElementById("left-bar");
const toggleThemeMode = document.getElementById("toggle-thememode");
const textToggleClass = document.querySelectorAll(".text-toggle-class")
const background = document.body;
let Theme = localStorage.getItem("thememode") || "light";
function darkMode() {
    background.style.backgroundColor = "black";
    leftBar.style.backgroundColor = "rgb(70,70,70)";
    textToggleClass.forEach((TTCFE) => {
        TTCFE.style.color = "white";
    })
    localStorage.setItem("thememode","dark");
    Theme = "dark";
}
function lightMode() {
    background.style.backgroundColor = "white";
    textToggleClass.forEach((TTCFE) => {
        TTCFE.style.color = "black";
    })
    leftBar.style.backgroundColor = "rgb(235,235,235)";
    localStorage.setItem("thememode","light");
    Theme = "light";
}
if (Theme === "dark") {
    darkMode();
    toggleThemeMode.style.backgroundColor = "rgb(138, 48, 255)";
    toggleThemeMode.classList.add("toggle-theme-go");
}
toggleThemeMode.onclick = () => {
    if (Theme === "light") {
        darkMode();
        toggleThemeMode.style.backgroundColor = "rgb(138, 48, 255)";
        toggleThemeMode.classList.add("toggle-theme-go");
    }
    else {
        lightMode();
        toggleThemeMode.style.backgroundColor = "rgb(220, 193, 255)";
        toggleThemeMode.classList.remove("toggle-theme-go");
    }
}
console.log("%c Hello!Welcome to T-PageCode Guides!","color: green;")