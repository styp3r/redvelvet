import React, { useState } from 'react';
import ProductBox from './ProductBox';
import ItemList from './ItemList';

function ProductsPage() {

    window.scrollTo(0, 0);
    const [currentItem, setcurrentItem] = useState("sweets");

    function dispItems(item) {
        return <ProductBox current={currentItem} key={item.id} img={item.img} price={item.price} name={item.name} qty={item.qty} category={item.category} />
    }

    function handleClick(event) {
        setcurrentItem(event.target.id);

        document.getElementById("sweets").classList.remove("catNameSelected");
        document.getElementById("chaats").classList.remove("catNameSelected");
        document.getElementById("snacks").classList.remove("catNameSelected");
        document.getElementById("parathas").classList.remove("catNameSelected");
        document.getElementById("mixtures").classList.remove("catNameSelected");
        //document.getElementById("combos").classList.remove("catNameSelected");
        document.getElementById("beverages").classList.remove("catNameSelected");

        document.getElementById(event.target.id).classList.add("catNameSelected");
    }

    return (
        <div id="productDisp">
            <h1 className = "prodTitle">Our Collection</h1>
            <div className="prodDispBlock">
                <div className="productLeft">
                    <div className="categoryPane">
                        <p onClick={handleClick} id="sweets" className="categoryLink catNameSelected">Sweets</p>
                        <p onClick={handleClick} id="chaats" className="categoryLink">Chaats</p>
                        <p onClick={handleClick} id="snacks" className="categoryLink">Snacks</p>
                        <p onClick={handleClick} id="parathas" className="categoryLink">Parathas</p>
                        <p onClick={handleClick} id="mixtures" className="categoryLink">Namkeen</p>
                        {/*<p onClick = {handleClick} id = "combos" className = "categoryLink">Combos</p>*/}
                        <p onClick={handleClick} id="beverages" className="categoryLink">Beverages</p>
                    </div>
                </div>
                <div className="productRight">
                    {ItemList.map(dispItems)}
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;