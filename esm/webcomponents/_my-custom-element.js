class MyCustomElement extends HTMLElement {
    static get tagName() { return 'my-custom-element' }
    static get observedAttributes() { return ['name'] }

    constructor() {
        super()
        this.time = {
            constructor: performance.now()
        }
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = `<h5>My Custom Element</h5><p>You are <span></span> since <i>0</i> sec.</p><style>
        :host { border: 1px solid lightgray; display: inline-block; padding: 0.5rem; } h5,p { margin: 0; }</style>`
    }

    connectedCallback() {
        console.log(`connected ${this.getAttribute('name')}...`)
        this.time.connectedCallback = performance.now()
    }

    disconnectedCallback() {
        console.log(`disconnected ${this.getAttribute('name')}...`)
        this.time.disconnectedCallback = performance.now()
        clearInterval(this.interval)
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.shadow.querySelector('span').textContent = newVal
        this.time.attributeChangedCallback = performance.now()
        this.i = 0
        this.shadow.querySelector('i').textContent = this.i
        if (this.interval) clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.shadow.querySelector('i').textContent = ++this.i
        }, 1000)
        console.log(this.time)
    }
}

console.log(performance.now())
customElements.define(MyCustomElement.tagName, MyCustomElement)