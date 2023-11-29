import React from 'react'
import Banner from '../pagesComponensts/Banner/Banner'
import Movie from '../pagesComponensts/Movies/Movie'

const Lancamentos = () => {
  return (
    <>
      <Banner/>
      <div>
        <h2 style={{fontSize: '2.5rem', display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>Lançamentos</h2>
        <Movie categoria='Drama, Ação'/>
      </div>
    </>
  )
}

export default Lancamentos