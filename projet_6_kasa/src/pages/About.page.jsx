import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';
import Banner from '../components/Banner.component';
import Collapse from '../components/Collapse.component';

export default function About() {
    return (
        <>
        <div className='about-page'>
            <Helmet>
                <title>A propos</title>
            </Helmet>
    
            <Header />
            <Banner />
            <div className='collapse-container'>
                <Collapse buttonName='Fiabilité'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
                <Collapse buttonName='Respect' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
                <Collapse buttonName='Service' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
                <Collapse buttonName='Sécurité' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
            </div>
        </div>
        <Footer />
        </>
    )
}