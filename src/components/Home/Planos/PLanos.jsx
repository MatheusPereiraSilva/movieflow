import React from 'react'
import styles from './PLanos.module.css'
import Buttons from '../../Buttons/Buttons'

const PLanos = ({title, list, price}) => {
  return (
    <section className={styles.planos}>
      <h1>{title}</h1>
      <ul>
        {list.map((item, index) => {
         return <li key={index}>{item}</li>
        })}
      </ul>
      <Buttons>{price}</Buttons>
    </section>
  )
}

export default PLanos
