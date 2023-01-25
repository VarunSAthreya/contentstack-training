function createCounter() {
    // global counter
    let count = 0;

    const counterContainer = document.createElement("div");
    const increment = document.createElement("button");
    const decrement = document.createElement("button");
    const buttons = document.createElement("div");
    const countValue = document.createElement("p");
    const header = document.createElement("h1");

    counterContainer.className = "counterContainer";
    header.className = "counterHeading";
    countValue.className = "countValue";
    buttons.className = "buttons";
    increment.className = "increment";
    decrement.className = "decrement";

    header.innerText = "Counter";
    countValue.innerText = " 00";
    increment.innerText = "+";
    decrement.innerText = "-";

    const getNegativeVal = (count) => {
        const val = count * -1;
        if (val > 9) return "-" + val;
        return "-0" + val;
    };

    const updateValue = () => {
        const val =
            count < 10
                ? count < 0
                    ? getNegativeVal(count)
                    : " 0" + count
                : count;

        countValue.innerText = val;
    };

    const incrementFunction = (_) => {
        count++;
        updateValue();
    };

    const decrementFunction = (_) => {
        count--;
        updateValue();
    };

    increment.onclick = incrementFunction;
    decrement.onclick = decrementFunction;

    buttons.appendChild(increment);
    buttons.appendChild(decrement);

    counterContainer.appendChild(header);
    counterContainer.appendChild(countValue);
    counterContainer.appendChild(buttons);

    // Append the container to root->body
    body.appendChild(counterContainer);
}
