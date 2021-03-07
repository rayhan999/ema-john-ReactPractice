import React from 'react';
import { useParams } from 'react-router-dom';
import fakedata from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { key } = useParams();
    const product = fakedata.find(pd => pd.key === key);
    console.log(product);
    return (
        <div>
            <h1>{key} Details</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;