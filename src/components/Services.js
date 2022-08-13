import React from 'react';

function Services() {
    return (
        <div id="servicesSection">
            <div className="servicesTitle">
                <h1 className="serTitleContent">Our Awesome Services</h1>
                <p className = "serTitleSubContent" >We take care of the important stuff so you can munch in peace!</p>
            </div>
            <div className="servicesBlocks">
                <div className="ser1">
                    <div className="ser1content">
                        <span className = "serIcons">&#x1F957;</span>
                        <h3>Quality Food</h3>
                        <p className = "ser1SubText">When it comes to quality, we take utmost care to ensure that we make the best food so you keep coming back for more!</p>
                    </div>
                </div>
                <div className="ser2">
                    <div className="ser2content">
                        <span className = "serIcons">&#x1F60B;</span>
                        <h3>Superb Taste</h3>
                        <p className = "ser2SubText">If it wasn't for the amazing and fresh ingredients we use, we'd never have food that tastes like a million bucks!</p>
                    </div>
                </div>
                <div className="ser3">
                    <div className="ser3content">
                        <span className = "serIcons">&#x1F64C;</span>
                        <h3>Hygiene First</h3>
                        <p className = "colorGrey">We take health and hygiene very seriously and have taken the necessary precautions to combat every health hazard</p>
                    </div>
                </div>
                <div className="ser4">
                    <div className="ser4content">
                        <span className = "serIcons">&#x1F4AF;</span>
                        <h3>Huge Collection</h3>
                        <p className = "colorGrey">With over 200 items in our collection, we are proud to offer you the widest range of sweets, chaats, snacks and parathas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;