import { Counter, Timer } from "./components/index.js";

const root = document.getElementById("root");

const body = document.createElement("div");
const nav = document.createElement("div");

nav.className = "nav";

const modeSwitch = document.createElement("button");
const themeSwitch = document.createElement("button");
const addWidgetButton = document.createElement("button");

addWidgetButton.innerText = "+";

let mode = "timer";

function addWidget() {
    if (mode === "timer") {
        const timer = new Timer();

        timer.mount(body);
    } else {
        const counter = new Counter();
        counter.mount(body);
    }
}

addWidgetButton.onclick = addWidget;

function changeMode() {
    if (mode === "timer") {
        body.innerHTML = "";
        mode = "counter";
        modeSwitch.innerText = "Timer";
        body.className = "counterGrid";

        for (let i in [1, 2, 3, 4]) {
            addWidget();
        }
    } else {
        body.innerHTML = "";
        mode = "timer";
        modeSwitch.innerText = "Counter";
        body.className = "timerGrid";

        for (let i in [1, 2]) {
            addWidget();
        }
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
nav.append(addWidgetButton);
nav.append(themeSwitch);

root.append(nav);
root.append(body);

changeMode();
