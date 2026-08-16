document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const toggleThemeMode = document.getElementById("toggle-thememode");
const textToggleClass = document.querySelectorAll(".text-toggle-class");
const background = document.body;
let Theme = localStorage.getItem("thememode") || "light";
function darkMode() {
    background.style.backgroundColor = "black";
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
console.log("%c 404Not Found - T-PageCode Guides","color: green;")