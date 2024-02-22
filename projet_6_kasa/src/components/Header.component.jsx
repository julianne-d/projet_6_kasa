import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header' >
      <p className='title'>
        K
        <svg viewBox='0 0 32 38' className='logo header__logo' xmlns='http://www.w3.org/2000/svg'>
          <path d="M31.7618 14.6403L16.6524 5.8262L8.27235 0.972076L0.0192871 15.4067L0.146255 28.9471L15.1287 37.7612L16.6524 36.867V24.093L23.3818 12.2132L30.2382 16.1731V28.9471L31.7618 28.053V14.6403Z"/>
        </svg>
        sa
      </p>
      <nav>
          <Link className='link nav__home' to='/'>Accueil</Link>
          <Link className='link nav__about' to='/about'>A Propos</Link>
      </nav>
    </div>
  )
}