import React from 'react';
import ProductBox from './ProductBox';
import ItemList from './ItemList';

function ProductsPage() {

    function dispItems(item) {
        return <ProductBox key={item.id} img={item.img} price={item.price} name={item.name} qty={item.qty} />
    }

    return (
        <div id="productDisp">
            <h1 className = "prodDispTitle">Products Page</h1>
            <div className = "prodDispBlock">
                <div className="productLeft">hello</div>
                <div className="productRight">
                    {ItemList.map(dispItems)}
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;