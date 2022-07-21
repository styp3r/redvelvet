import React from 'react';
import IMAGES from '../components/ImagesImport';

function ProductsPage(){
    return (
        <div>
            <h1>Products Page</h1>
            <img src = {IMAGES.samosa} alt = "" width = "200" height = "200" />
        </div>
    );
}

export default ProductsPage;