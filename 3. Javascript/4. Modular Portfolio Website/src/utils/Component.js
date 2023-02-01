class Component {
    constructor() {
        this.isMounted = false;
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }

    mount(parent) {
        if (this.isMounted) {
            console.error("Component Already Mounted!!!");
            return;
        }

        this.isMounted = true;

        if (parent) {
            parent.appendChild(this.render());
            return;
        }

        document.body.appendChild(this.render());
        return;
    }
}

export default Component;
