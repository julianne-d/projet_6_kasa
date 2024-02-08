import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header.component';
import DropDownCard from '../components/DropDownCard.component';

export default function Housing() {
    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>
    
            <Header />
            <div>
            <DropDownCard text='Description' />
            <DropDownCard text='Équipement' />
            </div>
        </>
    )
}