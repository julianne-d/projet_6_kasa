import React from 'react';
import { Helmet } from "react-helmet";
import AboutCard from '../components/AboutCard.component';

export default function About() {
    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>

            <div>
                <AboutCard text='Fiabilité' />
                <AboutCard text='Rescpect' />
                <AboutCard text='Service' />
                <AboutCard text='Sécurité' />
            </div>
        </>
    )
}