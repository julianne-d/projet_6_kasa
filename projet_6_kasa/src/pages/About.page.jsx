import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header.component';
import AboutCard from '../components/AboutCard.component';

export default function About() {
    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>
    
            <Header />
            <div>
                <AboutCard text='Fiabilité' />
                <AboutCard text='Rescpect' />
                <AboutCard text='Service' />
                <AboutCard text='Sécurité' />
            </div>
        </>
    )
}