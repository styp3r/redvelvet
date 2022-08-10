import React from 'react';

function Services() {
    return (
        <div id="servicesSection">
            <div className="servicesTitle">
                <h1 className="serTitleContent">Our Awesome Services</h1>
            </div>
            <div className="servicesBlocks">
                <div className="ser1">
                    <div className="ser1content">
                        <span className = "serIcons">&#x1F957;</span>
                        <h3>Quality Food</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="ser2">
                    <div className="ser2content">
                        <span className = "serIcons">&#x1F60B;</span>
                        <h3>Superb Taste</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="ser3">
                    <div className="ser3content">
                        <span className = "serIcons">&#x1F64C;</span>
                        <h3>Hygiene First</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="ser4">
                    <div className="ser4content">
                        <span className = "serIcons">&#x1F4AF;</span>
                        <h3>Huge Collection</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;