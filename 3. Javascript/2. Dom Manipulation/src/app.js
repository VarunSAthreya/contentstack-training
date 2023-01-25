const root = document.getElementById("root");

const body = document.createElement("div");
const nav = document.createElement("div");

nav.className = "nav";

const modeSwitch = document.createElement("button");
const themeSwitch = document.createElement("button");

themeSwitch.innerText = "Light";

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
    }
}

modeSwitch.onclick = changeMode;

nav.append(modeSwitch);
nav.append(themeSwitch);

root.append(nav);
root.append(body);

changeMode();
