import Girl from '../images/Decoration/contactGirl.png';
import Map from './Map';

function ContactPage(){

    window.scrollTo(0, 0);
    return (
        <div id = "contactBlock">
            <div className = "contactHeader">
                <div>
                    <p className = "contactHeaderText">Let's have a talk.</p>
                    <p className = "contactHeaderSubText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <img className = "contactGirl" src = {Girl}/>
            </div>
            <div className = "contactMid">
                <div className = "mapView">
                    <div className = "mapViewContainer">
                        <Map/>
                    </div>
                </div>
                <div className = "meetUs">
                    <div className = "meetUsText">
                        <h3>Meet Us</h3>
                        <p className = "space"><span class="material-symbols-outlined phoneIcon">call</span> +91 99452 58005</p>
                        <p className = "space"><span class="material-symbols-outlined mailIcon">mail</span> laddoos@ymail.com</p>
                        <p className = "space"><span class="material-symbols-outlined locIcon">location_on</span> "Hemkund", BMP No. 10, 14th D Cross, Behind GR Regency apartments, Baghmane Techpark Back Gate, Byrasandra, GM Palya, new Thippasandra Post, Bengaluru, India 560 075</p>
                    </div>
                </div>
                <div className = "pitchUs">
                <div className = "pitchUsText">
                        <h3>Write To Us</h3>
                        <input className = "pitchName" placeholder = "Name" type = "text"/>
                        <input  className = "pitchEmail" placeholder = "Email" type = "email"/>
                        <textarea  className = "pitchMessage" placeholder = "Message" type = "text"/>
                        <button className = "pitchBtn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;