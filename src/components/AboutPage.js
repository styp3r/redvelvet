import AboutPageHeader from '../images/Decoration/aboutPageHeader1.jpg';
import Footer from '../components/Footer';
import MobileFooter from './MobileFooter';
import AboutDesign from '../images/Decoration/aboutDesign.jpg';
import SubscribeBg from '../images/Decoration/subscribeBg.jpg';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const AboutPage = () => {

    window.scrollTo(0, 0);

    const form = useRef();

    const sendEmail = (e) => {
        document.getElementById("subscribeSuccess").style.display = "block";
        e.preventDefault();

        emailjs.sendForm('service_na36t7j', 'template_kjrcdlu', form.current, 'BPrKaRkebDZqC0Zs3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div id="aboutPage">
            <img className="aboutPageHeaderImg" src={AboutPageHeader} alt="loading..." />
            <h1 className="prodTitle">About Us</h1>
            <div className="aboutTextSection">

                <div className="aboutTextLeft">
                    <img className="aboutDesign" src={AboutDesign} alt="loading..." />
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
                        <span className="material-symbols-outlined abIcons">diversity_3</span>
                        <p>We have a team of more than 100 people who love to serve delicious food for our customers and we work round the clock to make that happen!</p>
                    </div>
                </div>
                <div className="stats2">
                    <div className="statBlock">
                        <span className="material-symbols-outlined abIcons">storefront</span>
                        <p>With 9 operational outlets, and many more to come, Laddoos is determined to become a household brand that everyone loves.</p>
                    </div>
                </div>
                <div className="stats3">
                    <div className="statBlock">
                        <span className="material-symbols-outlined abIcons">shopping_bag</span>
                        <p>We serve thousands of customers every year who love our food and we focus on increasing our customer base by operating in happening locations.</p>
                    </div>
                </div>
                <div className="stats4">
                    <div className="statBlock">
                        <span className="material-symbols-outlined abIcons">currency_rupee</span>
                        <p>We want to give the best possible experience in the most cost efficient manner possible which is why we have designed our collection to suit every budget. </p>
                    </div>
                </div>
            </div>

            <div className="subscribe">
                <img alt="loading..." className="subscribeImg" src={SubscribeBg} />
                <div className="subscribeText">
                    <div className = "subscribeTextBlock">
                        <h2>STAY IN TOUCH</h2>
                        <p>Subscribe to our newsletter and never miss out on our exclusive offers and perks!</p>

                        <form ref={form} onSubmit={sendEmail}>
                            <input className="emailSubcribeInput" name="user_email" placeholder="email@example.com" type="email" required/>
                            <button type="submit" value="Send" className="emailSubscribeSendBtn">Subscribe</button>
                            <p id = "subscribeSuccess">Subscribed!</p>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
            <MobileFooter />
        </div>
    );
}

export default AboutPage;