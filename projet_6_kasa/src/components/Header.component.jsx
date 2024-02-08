import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header' >
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about_us">A Propos</Link>
        </nav>
    </div>
  )
}