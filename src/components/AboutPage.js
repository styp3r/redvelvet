import AboutPageHeader from '../images/Decoration/aboutPageHeader.jpg';

function AboutPage(){

    window.scrollTo(0, 0);
    return (
        <div id = "aboutPage">
            <div className = "aboutTextSection">
                <div className = "aboutTextLeft">
                    <p className = "aboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

                <div className = "officeAddress">
                    <div className = "officeAddressText">
                        <h4>Our Head Office</h4>
                        <p>"Hemkund", BMP No. 10, 14th D Cross, Behind GR Regency apartments, Baghmane Techpark Back Gate, Byrasandra, GM Palya, new Thippasandra Post, Bengaluru, India 560 075</p>
                    </div>
                </div>
            </div>

            <div className = "aboutPageStats">
                <div className = "stats">one</div>
                <div className = "stats">two</div>
                <div className = "stats">three</div>
                <div className = "stats">four</div>
            </div>

            <div className = "abHeaderBlock">
                <div className = "abHeaderText">
                    <p className = "subscribeText">Subscribe To Our Mailing List To Get Great Offers!</p>
                    <input className = "emailInput" placeholder = "Email" type = "email"/>
                    <button className = "subBtn">Subscribe</button>
                </div>
                <img className = "aboutPageHeader" src = {AboutPageHeader}/>
            </div>
        </div>
    );
}

export default AboutPage;