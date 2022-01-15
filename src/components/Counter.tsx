import React, { useEffect, useState } from 'react'

import styles from './Counter.module.scss'

type CounterProps = {
  initial?: number
  maxHandler?: Function
}

const MAX_COUNTER = 10

export const Counter = ({ initial = 1, maxHandler }: CounterProps) => {
  const [counter, setCounter] = useState(initial)

  useEffect(() => {
    if (counter >= MAX_COUNTER && maxHandler) {
      maxHandler(counter)
    }
  }, [counter])

  return (
    <>
      <p className={styles['counter__info']}>Counter value is {counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className={styles['counter__button']}
      >
        INC
      </button>
    </>
  )
}

export default Counter
