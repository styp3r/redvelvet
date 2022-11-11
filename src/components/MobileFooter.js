import React from 'react';
import Fb from '../images/Decoration/fbIcon.png';
import In from '../images/Decoration/inIcon.png';
import Wa from '../images/Decoration/waIcon.png';
import LogoFooter from '../images/Decoration/logoFooter.jpg';

function MobileFooter() {
    return (
        <div id="mobileFooter">
            <img alt = "loading..." className="footerLogo" src={LogoFooter} />
            <p className="copyright">Copyright &#xA9; 2022 Xyka Hotels India Pvt. Ltd. | All rights reserved</p>
            <div className="social">
                <a aria-label="Redirects user to our Facebook profile" rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100072360552388"><img alt="loading..." className="fb" src={Fb} /></a>
                <a aria-label="Redirects user to our Instagram profile" target = "_blank" rel="noreferrer" href="https://www.instagram.com/laddoossweetsindia/"><img alt = "loading..." className="in" src={In} /></a>
                <a aria-label="Redirects user to our WhatsApp Chat" target = "_blank" rel="noreferrer" href = "https://wa.me/+919945258005"><img alt = "loading..." className="wa" src={Wa} /></a>
            </div>
        </div>
    );
}

export default MobileFooter;