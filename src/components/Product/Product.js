import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="productName">{name}</h4><br />
                <p><small>By:{seller}</small></p>
                <p><small>${price}</small></p><br />
                <p><small>Only {stock} left in stock- Order soon</small></p>
                <button className="nameBtn" onClick={() => props.handleAddproduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                    </button>
            </div>


        </div >
    );
};

export default Product;