import React from 'react'
import styles from './Banner.module.css'
import Girl from '../../../../public/images/detalhe-banner-2.png'
import Buttons from '../../Buttons/Buttons'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.info}>
        <h1 className={styles.title}>Bem-vindos!</h1>
        <h2 className={styles.subTitle}>Descubra uma vasta coleção de filmes e séries de alta qualidade.</h2>
        <div className={styles.botao}><Buttons>Comece a Explorar</Buttons></div>
        
      </div>
      <div className={styles.img}>
        <img src={Girl} alt="Garota" />
      </div>
    </section>
  )
}

export default Banner