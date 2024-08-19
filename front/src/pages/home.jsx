import Carousel from '../components/carousel/carousel'
import Catalogue from '../components/catalogue/catalogue'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'

import Marc from '../assets/marc.jpg'

import './home.sass'

const Home = () => {
    return (
        <div className='home'>
            <header>
                <img className='home__title' src={Marc} alt='logo Produit de Marc' loading='lazy'/>
            </header>
            <Carousel />
            <Catalogue />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home