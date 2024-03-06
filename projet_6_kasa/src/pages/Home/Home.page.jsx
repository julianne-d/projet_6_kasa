import React from 'react'
import Header from '../../components/Header/Header.component';
import Banner from '../../components/Banner/Banner.component';
import CardsContainer from '../../components/CardsContainer/CardsContainer.component';
import Footer from '../../components/Footer/Footer.component';

export default function HomePage() {
  return (
    <>
      <div className='homepage page'>
        <Header />
        <Banner />
        <CardsContainer />

      </div>
      <Footer />
    </>
  )
}