import React from 'react'
import styles from './Header.module.css'
import {ReactComponent as LogoDetalhe} from '../../../public/images/logo-detalhe.svg'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoDetalhe/>
        <nav className={styles.navigate}>
          <Link className={styles.color} to='/'>Home</Link>
          <Link className={styles.color} to='lancamentos'>Lançamentos</Link>
          <Link className={styles.color} to='categories'>Categorias</Link>
          <Link className={styles.color} to='perfil'>Meu Perfil</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header