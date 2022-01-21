export default class HelloWorldComponent extends HTMLElement {
  static get tagName () {
    return 'hello-world-component'
  }

  static get observedAttributes() {
    return ['alert']
  }

  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = `
      <h2>Hello World Component</h2>
    `
    this.loadStyles()

    this.headlineNode = this.shadow.querySelector('h1')
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.alert = newVal
  }

  set alert(value) {
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

  async loadStyles () {
    const cssModule = await import(`./${this.tagName.toLowerCase()}.css`, {
      assert: { type: 'css' }
    })
    this.shadow.adoptedStyleSheets = [cssModule.default]
  }
}