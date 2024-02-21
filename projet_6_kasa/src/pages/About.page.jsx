import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header.component';
import DropDownCard from '../components/DropDownCard.component';

export default function About() {
    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>
    
            <Header />
            <div>
                <DropDownCard text='Fiabilité' />
                <DropDownCard text='Respect' />
                <DropDownCard text='Service' />
                <DropDownCard text='Sécurité' />
            </div>
        </>
    )
}