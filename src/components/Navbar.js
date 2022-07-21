import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div id = "navbar">
            <div className = "navbarBlock">
            <div className = "navbarContent">
                <Link to = "/"><div id = "logo"></div></Link>
                <div id = "links">
                    <Link to = "productsPage"><p className = "productsLink">Products</p></Link>
                    <Link to = "aboutPage"><p className = "aboutLink">About</p></Link>
                    <Link to = "contactPage"><p className = "contactLink">Contact</p></Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;