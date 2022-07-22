import React from 'react';
import OnlineOrder from '../images/Decoration/onlineOrder.jpg';

function Platforms(){
    return (
        <div id = "platformsSection">
            <div className = "platformsBlocks">
                <div className = "platLeft">
                    <img className = "orderArt" src = {OnlineOrder}/>
                </div>
                <div  className = "platRight">
                    <div className = "platContent">
                        <h3 className = "platformsTitle">Partners</h3>
                        <h1>Simple Way To Order Your Food</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className = "orderNowText">Order Now!</p>
                        <button className = "swiggy">Swiggy</button>
                        <button className = "zomato">Zomato</button>
                        <button className = "amazon">Amazon</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platforms;