import AboutPageHeader from '../images/Decoration/aboutPageHeader.jpg';
import Footer from '../components/Footer';
import Condiments from '../images/Decoration/condiments.jpg';
import MobileFooter from './MobileFooter';
import AboutDesign from '../images/Decoration/aboutDesign.jpg';

function AboutPage() {

    window.scrollTo(0, 0);
    return (
        <div id="aboutPage">
            <img className="condiments" src={Condiments} />
            <img className="aboutDesign" src={AboutDesign} />
            <h1 className="prodTitle">About Us</h1>
            <div className="aboutTextSection">

                <div className="aboutTextLeft">
                    <p className="aboutText">Being in the food and beverages business for over a decade, we started with just one shop in 1998. Serving only the freshest that human hands can make, we are honoured to provide the people of Bengaluru with the best collection of Sweets, Chaats, Snacks and Parathas along with a few classical beverages.</p>
                    <p className="aboutText">We understand the fundamental human emotion behind tasting good food and strive to provide the most memorable experience for your taste buds, turning fresh ingredients into juicy and masala laden crispy food that would leave you craving for more!</p>
                </div>

                <div className="officeAddress">
                    <div className="officeAddressText">
                        <h4>Our Branches</h4>
                        <ul>
                            <li>Jeevan Bima Nagar</li>
                            <li>BTM</li>
                            <li>Electronic City</li>
                            <li>Varthur</li>
                            <li>Munekkollal</li>
                            <li>Doddanekundi</li>
                            <li>Horamavu</li>
                            <li>Bellandur</li>
                            <li>Kasturinagar</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="aboutPageStats">
                <div className="stats1">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">diversity_3</span>
                        <p>We have a team of more than 100 people who love to serve delicious food for our customers and we work round the clock to make that happen!</p>
                    </div>
                </div>
                <div className="stats2">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">storefront</span>
                        <p>With 9 operational outlets, and many more to come, Laddoos is determined to become a household brand that everyone loves.</p>
                    </div>
                </div>
                <div className="stats3">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">shopping_bag</span>
                        <p>We serve thousands of customers every year who love our food and we focus on increasing our customer base by operating in happening locations.</p>
                    </div>
                </div>
                <div className="stats4">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">currency_rupee</span>
                        <p>We want to give the best possible experience in the most cost efficient manner possible which is why we have designed our collection to suit every budget. </p>
                    </div>
                </div>
            </div>

            <div className="aboutSubBlock">
                <div className="abHeaderBlock">
                    <div className = "subscribeBgMobile">
                        <div className = "filter"></div>
                        <img className="aboutPageHeader" src={AboutPageHeader}></img>
                    </div>
                    <div className="abHeaderText">
                        <p className="subscribeText">Subscribe To Our Mailing List To Get Great Offers!</p>
                        <input className="emailInput" placeholder="Email" type="email" />
                        <button className="subBtn">Subscribe</button>
                    </div>
                </div>
            </div>

            <Footer />
            <MobileFooter />
        </div>
    );
}

export default AboutPage;