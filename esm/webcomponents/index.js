import HelloWorld from "./hello-world.js";
import HelloWorldComponent from "./hello-world-component.js";
import MyCounter from "./my-counter.js";

customElements.define(HelloWorld.tagName, HelloWorld)
customElements.define(HelloWorldComponent.tagName, HelloWorldComponent)
customElements.define(MyCounter.tagName, MyCounter)