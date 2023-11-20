import React from 'react'
import styles from './Header.module.css'
import {ReactComponent as LogoDetalhe} from '../../../public/images/logo-detalhe.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoDetalhe/>
        <nav>
          <BrowserRouter>
            <Routes>
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='lancamentos' element={<Lanamentos/>}/>
              <Route path='categorias' element={<Categorias/>}/>
              <Route path='perfil' element={<Perfil/>}/>
            </Routes>
          </BrowserRouter>
        </nav>
      </div>
    </header>
  )
}

export default Header