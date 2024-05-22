import Carousel from '../components/carousel/carousel'
import Catalogue from '../components/catalogue/catalogue'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'

import Marc from '../assets/marc.jpg'

import { CarouselList } from '../data/carousel'

import './home.sass'

const Home = () => {
    return (
        <div className='home'>
            {/* <h1 className='home__title'>Produits de Marc</h1> */}
            <img className='home__title' src={Marc} alt='logo Produit de Marc' loading='lazy'/>
            <Carousel items={CarouselList} />
            <Catalogue />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home