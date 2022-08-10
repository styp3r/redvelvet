import React from 'react';

function Footer(){
    return (
        <div id = "footerSection">
            <div className = "footerBlocks">
                <div className = "footerLeft">
                    <div className = "footerLeftContent">
                        <p className = "footerLogo">Laddoos</p>
                        <p>Copyright &#169; Xyka Hotels India Private Limited</p>
                    </div>
                </div>
                <div className = "footerRight">
                    <div className = "footerRightContent">
                        <div className = "col-1">
                            <h3 className = "footerColTitle">Social</h3>
                            <hr />
                            <a href = "https://www.instagram.com/laddoossweetsindia/"><p>Instagram</p></a>
                            <p>Facebook</p>
                            <p>WhatsApp</p>
                        </div>
                        <div className = "col-2">
                            <h3 className = "footerColTitle">Useful Links</h3>
                            <hr />
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Refund Policy</p>
                            <p>FAQs</p>
                        </div>
                        <div className = "col-3">
                            <h3 className = "footerColTitle">Branches</h3>
                            <hr />
                            <p>Jeevan Bhima Nagar</p>
                            <p>BTM</p>
                            <p>Doddanekundi</p>
                            <p>Munnekolal</p>
                            <p>Horamavu</p>
                            <p>Kasturinagar</p>
                            <p>Bellandur</p>
                            <p>Electronic City</p>
                            <p>Varthur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;