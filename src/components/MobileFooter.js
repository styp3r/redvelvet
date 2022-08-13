import React from 'react';
import Fb from '../images/Decoration/fbIcon.png';
import In from '../images/Decoration/inIcon.png';
import Wa from '../images/Decoration/waIcon.png';
import LogoFooter from '../images/Decoration/logoFooter.jpg';

function MobileFooter() {
    return (
        <div id="mobileFooter">
            <img className="footerLogo" src={LogoFooter} />
            <p className="copyright">Copyright &#xA9; 2022 Xyka Hotels India Pvt. Ltd. | All rights reserved</p>
            <div className="social">
                <img className="fb" src={Fb} />
                <a target = "_blank" href="https://www.instagram.com/laddoossweetsindia/"><img className="in" src={In} /></a>
                <a target = "_blank" href = "https://wa.me/+919945258005"><img className="wa" src={Wa} /></a>
            </div>
        </div>
    );
}

export default MobileFooter;