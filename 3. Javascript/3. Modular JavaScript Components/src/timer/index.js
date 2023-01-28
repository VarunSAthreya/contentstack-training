import { generateUniqueId } from "../utils/index.js";

class Timer {
    constructor(parent) {
        this.id = generateUniqueId({ prefix: "timer" });

        this.timerContainer = document.createElement("div");
        this.timerHeader = document.createElement("h1");
        this.timerDisplay = document.createElement("div");
        this.buttons = document.createElement("div");
        this.start = document.createElement("button");
        this.reset = document.createElement("button");

        this.ms = 0;
        this.sec = 0;
        this.min = 0;
        this.hr = 0;

        this.init = null;

        this.parent = parent;
        this.#setDefaultValues();
    }

    #setDefaultValues() {
        this.timerContainer.id = this.id;

        this.timerContainer.className = "timerContainer";
        this.timerHeader.className = "timerHeader";
        this.timerDisplay.classList = "timerDisplay";
        this.start.className = "start";
        this.reset.className = "reset";

        this.timerHeader.innerText = "Timer";
        this.timerDisplay.innerText = "00 : 00 : 00 : 000";
        this.start.innerText = "Start";
        this.reset.innerText = "Reset";
    }

    #runTimer() {
        this.ms += 10;

        if (this.ms == 1000) {
            this.ms = 0;
            this.sec++;
            if (this.sec == 60) {
                this.sec = 0;
                this.min++;
                if (this.min == 60) {
                    this.min = 0;
                    this.hr++;
                }
            }
        }

        // Formatting `0` for cohesive look
        let h = this.hr < 10 ? "0" + this.hr : this.hr;
        let m = this.min < 10 ? "0" + this.min : this.min;
        let s = this.sec < 10 ? "0" + this.sec : this.sec;
        let mi =
            this.ms < 10
                ? "00" + this.ms
                : this.ms < 100
                ? "0" + this.ms
                : this.ms;

        this.timerDisplay.innerText = ` ${h} : ${m} : ${s} : ${mi}`;
    }

    #createTimer() {
        this.start.onclick = () => {
            if (this.start.innerText === "Pause") {
                this.start.className = "start";
                this.start.innerText = "Start";

                clearInterval(this.init);
            } else if (this.start.innerText === "Start") {
                this.start.className = "pause";
                this.start.innerText = "Pause";
                if (this.init !== null) {
                    clearInterval(this.init);
                }
                this.init = setInterval(() => {
                    this.#runTimer();
                }, 10);
            }
        };

        this.reset.onclick = () => {
            this.start.className = "start";
            this.start.innerText = "Start";

            clearInterval(this.init);

            // [ms, sec, min, hr] = [0, 0, 0, 0];
            this.ms = 0;
            this.sec = 0;
            this.min = 0;
            this.hr = 0;
            this.timerDisplay.innerHTML = "00 : 00 : 00 : 000 ";
        };

        this.buttons.appendChild(this.start);
        this.buttons.appendChild(this.reset);

        this.timerContainer.appendChild(this.timerHeader);
        this.timerContainer.appendChild(this.timerDisplay);
        this.timerContainer.appendChild(this.buttons);

        this.parent.appendChild(this.timerContainer);
    }

    mount() {
        if (document.getElementById(this.id)) {
            console.log("Timer Already Mounted!");
            return;
        }

        this.#createTimer();
    }
}

export { Timer };
