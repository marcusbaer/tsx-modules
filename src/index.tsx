import './scss/main.scss'
import './webcomponents'

import { render } from 'react-dom'
import React from 'react'

import bar from './libs/bar'

import Header from './components/Header'
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-world-component': any
    }
  }
}

bar()

const ninja = 'Ninja'

const Application = () => {
  const maxCounterHandler = (counter: number) => {
    const helloWorldElement = document.querySelector('hello-world-component')
    helloWorldElement?.setAttribute('alert', `${counter}`)
  }

  const clearAlert = () => {
    const helloWorldElement = document.querySelector('hello-world-component')
    helloWorldElement?.removeAttribute('alert')
  }

  return (
    <>
      <Header />
      <HelloWorld name={ninja} />
      <Counter initial={4} maxHandler={maxCounterHandler} />
      <hello-world-component></hello-world-component>
      <button onClick={() => clearAlert()}>CLEAR</button>
    </>
  )
}

render(<Application />, document.querySelector('#app'))
