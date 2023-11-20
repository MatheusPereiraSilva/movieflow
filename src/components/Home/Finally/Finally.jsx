import React from 'react'
import styles from './Finally.module.css'
import poster from '../../../../public/images/filmes-poster.png'
import Buttons from '../../Buttons/Buttons'

const Finally = () => {
  return (
    <section className={styles.final}>
      <div className={styles.img}>
        <img src={poster} alt="filmes" />
      </div>
      <div className={styles.info}>
        <h1>Filmes e séries para todos os públicos!</h1>
        <Buttons>Conheça o nosso catálogo</Buttons>
      </div>
    </section>
  )
}

export default Finally