import HelloWorldComponent from './HelloWorldComponent'

customElements.define(HelloWorldComponent.tagName, HelloWorldComponent)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-world-component': any
    }
  }
}
