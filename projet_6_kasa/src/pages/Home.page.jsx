import { Helmet } from "react-helmet";
import Header from '../components/Header.component';
import Banner from '../components/Banner.component';
import CardsContainer from '../components/CardsContainer.component';
import Footer from '../components/Footer.component';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Accueil</title>
      </Helmet>

      <Header />
      <Banner />
      <CardsContainer />
      <Footer />
    </>
  )
}