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
                        <img className = "footerLogo" src = {LogoFooter}/>
                        <p className = "copyright">Copyright &#xA9; 2022 Xyka Hotels India Pvt. Ltd. | All rights reserved</p>
                    </div>
                    <div className="footerRight">
                        <div className="social">
                            <img className="fb" src={Fb} />
                            <a href="https://www.instagram.com/laddoossweetsindia/"><img className="in" src={In} /></a>
                            <img className="wa" src={Wa} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;