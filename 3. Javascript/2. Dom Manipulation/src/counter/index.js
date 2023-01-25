function createCounter() {
    // global counter
    let count = 0;

    const counterContainer = document.createElement("div");
    const increment = document.createElement("button");
    const decrement = document.createElement("button");
    const buttons = document.createElement("div");
    const countValue = document.createElement("p");
    const header = document.createElement("h1");

    // Counter container
    counterContainer.className = "counterContainer";

    // Counter Header
    header.innerText = "Counter";
    header.id = "counterHeading";

    // Counter Value
    countValue.innerText = "Count: 0";
    countValue.id = "countValue";

    // Increment and Decrement feature
    const updateValue = () => {
        countValue.innerText = `Count: ${count}`;
    };

    const incrementFunction = (_) => {
        count++;
        updateValue();
    };

    const decrementFunction = (_) => {
        count--;
        updateValue();
    };

    buttons.id = "buttons";

    increment.innerText = "+";
    increment.onclick = incrementFunction;
    increment.className = "increment";

    decrement.innerText = "-";
    decrement.onclick = decrementFunction;
    decrement.className = "decrement";

    buttons.appendChild(increment);
    buttons.appendChild(decrement);

    // Append all the elements
    counterContainer.appendChild(header);
    counterContainer.appendChild(countValue);
    counterContainer.appendChild(buttons);

    // Append the container to root->body
    body.appendChild(counterContainer);
}
