import styles from "./HelloWorldComponent.web.scss";
class HelloWorldComponent extends HTMLElement {
    shadow

    static get tagName() {
        return 'hello-world-component'
    }

    static get observedAttributes() {
        return ['alert']
    }

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.innerHTML = `<h2>Hello World Component</h2>`

        const style = document.createElement('style')
        style.textContent = styles
        this.shadow.appendChild(style)
    }

    attributeChangedCallback(name:string, oldVal:string, newVal:string) {
        this.alert = newVal
    }

    set alert(value:string) {
        let alertNode = this.shadow.querySelector('p[aria-role=alert]')
        if (alertNode && value) {
            alertNode.textContent = `Max reached with value ${value}!`
        } else if (value) {
            alertNode = document.createElement('p')
            alertNode.setAttribute('aria-role', 'alert')
            alertNode.textContent = `Max reached with value ${value}!`
            this.shadow.appendChild(alertNode)
        } else if (alertNode) {
            this.shadow.removeChild(alertNode)
        }
    }
}

export default HelloWorldComponent