const MAX_COUNTER = 10

export default class MyCounter extends HTMLElement {
  static get tagName () {
    return 'my-counter'
  }

  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = `
      <p class="counter__info">Counter value is </p>
      <button class="counter__button">INC</button>
    `
    this.loadStyles()

    this.buttonNode = this.shadow.querySelector('button')
    this.infoNode = this.shadow.querySelector('p')

    this.counterNode = document.createTextNode('0')
    this.infoNode.appendChild(this.counterNode)
  }

  connectedCallback() {
    const initial = this.getAttribute('initial')
    this.counter = initial ? parseInt(initial) : 0
    this.buttonNode.addEventListener('click', this.incrementCounter.bind(this))
  }

  incrementCounter() {
    this.counter += 1
    if (this.counter >= MAX_COUNTER) {
      this.dispatchMaxCount(this.counter)
    }
  }

  set counter(value) {
    this.counterNode.textContent = value
  }

  get counter() {
    return parseInt(this.counterNode.textContent)
  }

  dispatchMaxCount (counter) {
    const maxEvent = new CustomEvent('max-count', {
      bubbles: true,
      detail: { counter }
    })
    this.dispatchEvent(maxEvent)
  }
  
  async loadStyles () {
    const cssModule = await import(`./${this.tagName.toLowerCase()}.css`, {
      assert: { type: 'css' }
    })
    this.shadow.adoptedStyleSheets = [cssModule.default]
  }
}