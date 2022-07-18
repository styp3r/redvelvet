import React from 'react';

function Navbar(){
    return (
        <div id = "navbar">
            <div className = "navbarBlock">
            <div className = "navbarContent">
                <div id = "logo"></div>
                <div id = "links">
                    <p className = "productsLink">Products</p>
                    <p className = "aboutLink">About</p>
                    <p className = "contactLink">Contact</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;