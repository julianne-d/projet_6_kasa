import React from 'react'
import Header from '../components/Header.component';
import Banner from '../components/Banner.component';
import CardsContainer from '../components/CardsContainer.component';
import Footer from '../components/Footer.component';

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