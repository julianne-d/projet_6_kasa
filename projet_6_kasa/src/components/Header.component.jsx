import React from 'react'
import { Link } from 'react-router-dom';

import logoHeader from '../assets/images/logo_header.png'

export default function Header() {
  return (
    <div className='header' >
      <div className='logo-container'>
        <img className='logo' src={logoHeader} alt='Kasa logo'/>
      </div>
      <nav>
          <Link className='link nav__home' to='/'>Accueil</Link>
          <Link className='link nav__about' to='/about'>A Propos</Link>
      </nav>
    </div>
  )
}