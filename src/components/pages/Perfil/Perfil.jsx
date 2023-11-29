import React from 'react'
import Movie from '../pagesComponensts/Movies/Movie'
import Banner from '../pagesComponensts/Banner/Banner'
import Header from '../../Header/Header'
const Perfil = () => {
  return (
    <>
    <Banner/>
    <div>
      <h2 style={{fontSize: '2.5rem', display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>Continue assistindo...</h2>
      <Movie categoria='Fantasia'/>
    </div>
    <div>
      <h2 style={{fontSize: '2.5rem', display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>Recomendações</h2>
      <Movie categoria="Anime"/>
    </div>
    </>
  )
}

export default Perfil