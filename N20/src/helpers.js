class $el {
    #element = null;

    constructor(tagName, attrs = {}, events = {}, children = []) {
        this.element = document.createElement(tagName);

        Object.entries(attrs).forEach((attr) => this.element.setAttribute(...attr));
        Object.entries(events).forEach(event => this.addEvent(...event));

        children.forEach(node => this.appendChild(node));
    }

    addEvent(eventName, handler, once=false) {
        this.element.addEventListener(eventName, handler, once);
    }

    appendChild(child) {
        if (typeof child === 'string') {
            this.element.innerText = child;
        } else if (child instanceof $el) {
            this.element.appendChild(child.element);
        }
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }
}

export {
    $el
}