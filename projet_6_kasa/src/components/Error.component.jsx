/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';

export default function Error() {
    return (
        <>
            <Helmet>
                <title>404</title>
            </Helmet>
            
            <Header />
            <div className="error-404-container">
                <h1 className="error-404-container__h1">404</h1>
                <p className="error-404-container__text">Oups ! La page que <br className='hidden-on-desktop'/> vous demandez n'existe pas.</p>
                <Link className='link error-404-container__link' to='/about'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
}