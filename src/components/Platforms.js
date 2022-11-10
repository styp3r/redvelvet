import React from 'react';
import OnlineOrder from '../images/Decoration/takeAway.png';
import LazyLoad from 'react-lazy-load';

function Platforms() {

    return (
        <div id="platformsSection">
            <div className="platformsBlocks">
                <div className="platLeft">
                    <img className="orderArt" src={OnlineOrder} alt="Loading..." />
                </div>
                <div className="platRight">
                    <div className="platContent">
                        <h3 className="platformsTitle">Partners</h3>
                        <h1>Simple Way To Order Your Food</h1>
                        <p className="colorGrey">We have partnered up with the leading delivery executives in the city to give you a seamless way of ordering our food so you can enjoy top-quality deliciousness wherever you are. So, what are you waiting for?</p>
                        <p className="orderNowText">Order Now!</p>
                        <a aria-label="Redirects user to Swiggy" target = "_blank" rel="noreferrer" href = "https://www.swiggy.com/"><button className="swiggy">Swiggy</button></a>
                        <a aria-label="Redirects user to Zomato" target = "_blank" rel="noreferrer" href = "https://www.zomato.com/"><button className="zomato">Zomato</button></a>
                        <a aria-label="Redirects user to our Amazon" target = "_blank" rel="noreferrer" href ="https://www.amazon.in/primefood/"><button className="amazon">Amazon</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platforms;