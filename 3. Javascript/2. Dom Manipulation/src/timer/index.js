function createTimer() {
    const timerContainer = document.createElement("div");
    const timerHeader = document.createElement("h1");
    const timerDisplay = document.createElement("div");
    const buttons = document.createElement("div");
    const start = document.createElement("button");
    const reset = document.createElement("button");

    timerContainer.className = "timerContainer";
    timerHeader.className = "timerHeader";
    timerDisplay.classList = "timerDisplay";
    start.className = "start";
    reset.className = "reset";

    timerHeader.innerText = "Timer";
    timerDisplay.innerText = "00 : 00 : 00 : 000";
    start.innerText = "Start";
    reset.innerText = "Reset";

    let [ms, sec, min, hr] = [0, 0, 0, 0]; // millisecond, second, minute, hour

    let init = null;

    function displayTimer() {
        ms += 10;
        if (ms == 1000) {
            ms = 0;
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
                if (min == 60) {
                    min = 0;
                    hr++;
                }
            }
        }

        // Formatting `0` for cohesive look
        let h = hr < 10 ? "0" + hr : hr;
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;
        let mi = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;

        timerDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${mi}`;
    }

    start.onclick = function () {
        if (start.innerText === "Pause") {
            start.className = "start";
            start.innerText = "Start";

            clearInterval(init);
        } else if (start.innerText === "Start") {
            start.className = "pause";
            start.innerText = "Pause";
            if (init !== null) {
                clearInterval(init);
            }
            init = setInterval(displayTimer, 10);
        }
    };

    reset.onclick = function () {
        start.className = "start";
        start.innerText = "Start";

        clearInterval(init);

        [ms, sec, min, hr] = [0, 0, 0, 0];
        timerDisplay.innerHTML = "00 : 00 : 00 : 000 ";
    };

    buttons.appendChild(start);
    buttons.appendChild(reset);

    timerContainer.appendChild(timerHeader);
    timerContainer.appendChild(timerDisplay);
    timerContainer.appendChild(buttons);

    body.appendChild(timerContainer);
}
