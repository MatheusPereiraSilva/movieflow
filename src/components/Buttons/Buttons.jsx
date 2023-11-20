import React from 'react'
import styles from './Buttons.module.css'

const Buttons = ({children}) => {
  return (
    <button className={styles.buttons}>{children}</button>
  )
}

export default Buttons