import React from 'react'
import { Helmet } from "react-helmet-async";
import Header from '../components/Header.component';
import Banner from '../components/Banner.component';
import CardsContainer from '../components/CardsContainer.component';
import Footer from '../components/Footer.component';

export default function HomePage() {
  return (
    <>
      <div className='homepage page'>
        <Helmet>
          <title>Accueil</title>
        </Helmet>

        <Header />
        <Banner />
        <CardsContainer />

      </div>
      <Footer />
    </>
  )
}