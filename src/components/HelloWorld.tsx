import React from 'react'

type HelloWorldProps = {
  name?: string
}

export const HelloWorld = ({ name }: HelloWorldProps) => (
  <h1>Hello {name ? name : 'world'}</h1>
)

export default HelloWorld
