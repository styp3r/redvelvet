import Hero from './Hero';
import BestSellers from './Bestsellers';
import About from './About';
import Services from './Services';
import Platforms from './Platforms';
import Reviews from './Reviews';
import Footer from './Footer';

function Home() {



    return (
        <div>
            <Hero />
            <BestSellers />
            <About />
            <Services />
            <Platforms />
            <Reviews />
            <Footer />
        </div>
    );
}

export default Home;