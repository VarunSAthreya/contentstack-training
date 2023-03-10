const root = document.getElementById("root");

const body = document.createElement("div");
const nav = document.createElement("div");

nav.className = "nav";

const modeSwitch = document.createElement("button");
const themeSwitch = document.createElement("button");

let mode = "timer";

function changeMode() {
    if (mode === "timer") {
        body.innerHTML = "";
        mode = "counter";
        modeSwitch.innerText = "Timer";

        createCounter();
    } else {
        body.innerHTML = "";
        mode = "timer";
        modeSwitch.innerText = "Counter";

        createTimer();
    }
}

modeSwitch.onclick = changeMode;

themeSwitch.innerText = "Light";
document.body.className = "dark-theme";

themeSwitch.onclick = function () {
    if (themeSwitch.innerText === "Dark") {
        themeSwitch.innerText = "Light";
        document.body.className = "dark-theme";
    } else if (themeSwitch.innerText === "Light") {
        themeSwitch.innerText = "Dark";
        document.body.className = "";
    }
};

nav.append(modeSwitch);
nav.append(themeSwitch);

root.append(nav);
root.append(body);

changeMode();
