/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';

export default function Error() {
    return (
        <>
            <div className='page'>
                <Header />
                <div className="error-404-container">
                    <h1 className="error-404-container__h1">404</h1>
                    <p className="error-404-container__text">Oups ! La page que <br className='hidden-on-desktop'/> vous demandez n'existe pas.</p>
                    <Link className='link error-404-container__link' to='/'>Retourner sur la page d'accueil</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}