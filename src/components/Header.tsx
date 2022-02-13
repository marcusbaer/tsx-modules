import React from 'react'

type HeaderProps = {
  name?: string
}

export const Header = ({ name }: HeaderProps) => (
  <header style={{
      background: 'teal',
      boxSizing: 'border-box',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      width: '100%'
  }}>
      Header
  </header>
)

export default Header
