import Girl from '../images/Decoration/contactGirl.png';
import Footer from '../components/Footer';
import Map from './Map';
import MobileFooter from './MobileFooter';
import LazyLoad from 'react-lazy-load';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    window.scrollTo(0, 0);
    const form = useRef();

    const sendEmail = (e) => {
        document.getElementById("messageSuccess").style.display = "block";
        e.preventDefault();

        emailjs.sendForm('service_na36t7j', 'template_akk2hkk', form.current, 'BPrKaRkebDZqC0Zs3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div id="contactBlock">
            <div className="contactHeader">
                <div className="ctLeft">
                    <p className="contactHeaderText">Let's have a talk.</p>
                    <p className="contactHeaderSubText">We love talking to our customers whether it is related to feedback to make our services better suited for you or to discuss any business propositions or collaborations. We're on-board with anything you might have to tell us!</p>
                </div>
                <div className="ctRight">
                    <LazyLoad><img className="contactGirl" src={Girl} alt="loading..." /></LazyLoad>
                </div>
            </div>
            <div className="contactMid">
                <div className="mapView">
                    <div className="mapViewContainer">
                        <Map />
                    </div>
                </div>
                <div className="meetUs">
                    <div className="meetUsText">
                        <h3>Contact Us</h3>
                        <p className="space"><span class="material-symbols-outlined phoneIcon">call</span> +91 99452 58005</p>
                        <p className="space"><span class="material-symbols-outlined mailIcon">mail</span> laddoos@ymail.com</p>
                    </div>
                </div>
                <div className="pitchUs">
                    <div className="pitchUsText">
                        <h3>Write To Us</h3>

                        <form ref={form} onSubmit={sendEmail}>
                            <input className="pitchName" name="user_name" placeholder="Name" type="text" required/>
                            <input className="pitchEmail" name="user_email" placeholder="Email" type="email" required/>
                            <textarea className="pitchMessage" name="message" placeholder="Message" type="text" required/>
                            <button type="submit" value="Send" className="pitchBtn">Send</button>
                            <p id = "messageSuccess">Successfully sent! We will get back to you soon!</p>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
            <MobileFooter />
        </div>
    );
}

export default ContactPage;