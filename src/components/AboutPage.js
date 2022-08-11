import AboutPageHeader from '../images/Decoration/aboutPageHeader.jpg';
import Footer from '../components/Footer';

function AboutPage() {

    window.scrollTo(0, 0);
    return (
        <div id="aboutPage">
            <h1 className = "prodTitle">About Us</h1>
            <div className="aboutTextSection">
                <div className="aboutTextLeft">
                    <p className="aboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

                <div className="officeAddress">
                    <div className="officeAddressText">
                        <h4>Our Head Office</h4>
                        <p>"Hemkund", BMP No. 10, 14th D Cross, Behind GR Regency apartments, Baghmane Techpark Back Gate, Byrasandra, GM Palya, new Thippasandra Post, Bengaluru, India 560 075</p>
                    </div>
                </div>
            </div>

            <div className="aboutPageStats">
                <div className="stats1">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">diversity_3</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className="stats2">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">storefront</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className="stats3">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">shopping_bag</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className="stats4">
                    <div className="statBlock">
                        <span class="material-symbols-outlined abIcons">currency_rupee</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>

            <div className="aboutSubBlock">
                <div className="abHeaderBlock">
                    <div className="abHeaderText">
                        <p className="subscribeText">Subscribe To Our Mailing List To Get Great Offers!</p>
                        <input className="emailInput" placeholder="Email" type="email" />
                        <button className="subBtn">Subscribe</button>
                    </div>
                    <img className="aboutPageHeader" src={AboutPageHeader} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutPage;