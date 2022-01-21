export default class HelloWorld extends HTMLElement {
  static get tagName () {
    return 'hello-world'
  }

  static get observedAttributes() {
    return ['name']
  }

  constructor () {
    super()

    // this.shadow = this.attachShadow({ mode: 'open' })
    this.innerHTML = `
      <h1>Hello world</h1>
    `
    // this.loadStyles()

    this.headlineNode = this.querySelector('h1')
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.name = newVal
  }

  set name(value) {
    this.headlineNode.textContent = `Hello ${value || 'world'}`
  }

  // async loadStyles () {
  //   const cssModule = await import(`./${this.tagName.toLowerCase()}.css`, {
  //     assert: { type: 'css' }
  //   })
  //   this.shadow.adoptedStyleSheets = [cssModule.default]
  // }
}