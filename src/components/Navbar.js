import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div id = "navbar">
            <div className = "navbarBlock">
            <div className = "navbarContent">
                <Link to = "/"><div id = "logo"></div></Link>
                <div id = "links">
                    <Link to = "products"><p className = "productsLink">Menu</p></Link>
                    <Link to = "about"><p className = "aboutLink">About</p></Link>
                    <Link to = "contact"><p className = "contactLink">Contact</p></Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;