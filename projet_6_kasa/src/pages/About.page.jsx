import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';
import Collapse from '../components/Collapse.component';

export default function About() {
    return (
        <>
            <Helmet>
                <title>A propos</title>
            </Helmet>
    
            <Header />
            <div>
                <Collapse classname='btn btn__collapse' buttonName='Fiabilité'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
                <Collapse classname='btn btn__collapse' buttonName='Respect' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
                <Collapse classname='btn btn__collapse' buttonName='Service' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
                <Collapse classname='btn btn__collapse' buttonName='Sécurité' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
            </div>
            <Footer />
        </>
    )
}