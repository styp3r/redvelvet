import React from 'react';
import Fb from '../images/Decoration/fbIcon.png';
import In from '../images/Decoration/inIcon.png';
import Wa from '../images/Decoration/waIcon.png';
import LogoFooter from '../images/Decoration/logoFooter.jpg';

function Footer() {
    return (
        <div id="footerSection">
            <div className="footerContent">
                <div className="footerLeft">
                    <img alt="loading..." className="footerLogo" src={LogoFooter} />
                    <p className="copyright">Copyright &#xA9; 2022 Xyka Hotels India Pvt. Ltd. | All rights reserved</p>
                </div>
                <div className="footerRight">
                    <div className="social">
                        <img alt="loading..." className="fb" src={Fb} />
                        <a aria-label="Redirects user to our Instagram profile" rel="noreferrer" target="_blank" href="https://www.instagram.com/laddoossweetsindia/"><img alt="loading..." className="in" src={In} /></a>
                        <a aria-label="Redirects user to our WhatsApp Chat" rel="noreferrer" target="_blank" href="https://wa.me/+919945258005"><img alt="loading..." className="wa" src={Wa} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;