import React from 'react'
import styles from './Categories.module.css'
import Banner from '../pagesComponensts/Banner/Banner'
import Movie from '../pagesComponensts/Movies/Movie'

const Categories = () => {
  return (<>
    <Banner/>
    <h2 className={styles.titulo}>Drama & Ação</h2>
    <Movie categoria='Drama, Ação'/>
    <h2 className={styles.titulo}>Aventura</h2>
    <Movie categoria='Aventura'/>    
    <h2 className={styles.titulo}>Comédia</h2>
    <Movie categoria='Comédia'/>
    <h2 className={styles.titulo}>Fantasia</h2>
    <Movie categoria='Fantasia'/>
    <h2 className={styles.titulo}>Anime</h2>
    <Movie categoria='Anime'/>
    </>
  )
}

export default Categories