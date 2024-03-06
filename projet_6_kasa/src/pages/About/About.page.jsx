import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Banner from '../../components/Banner/Banner.component';
import Collapse from '../../components/Collapse/Collapse.component';

export default function About() {
    return (
        <>
        <div className='about-page page'>
            <Header />
            <Banner />
            <div className='collapse-container'>
                <Collapse buttonName='Fiabilité'
                    text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformesux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' />
                <Collapse buttonName='Respect' 
                    text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbationdu voisinage entraînera une exclusion de nos plateformes.' />
                <Collapse buttonName='Service' 
                    text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbationdu voisinage entraînera une exclusion de nos plateformes.' />
                <Collapse buttonName='Sécurité' 
                    text='La sécurité est la priorité de Kasa. Aussi bien pour nos h^tes que pour nos voyageurs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ante non turpis tristique pharetra. Praesent imperdiet ipsum non mattis aliquet.' />
            </div>
        </div>
        <Footer />
        </>
    )
}