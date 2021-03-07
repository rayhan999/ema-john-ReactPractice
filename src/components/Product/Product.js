import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props)
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="productName"><Link to={"/product/key=" + key}>{name}</Link></h4><br />
                <p><small>By:{seller}</small></p>
                <p><small>${price}</small></p><br />
                <p><small>Only {stock} left in stock- Order soon</small></p>
                {props.showAddToCart && <button className="nameBtn" onClick={() => props.handleAddproduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                    </button>}
            </div>


        </div >
    );
};

export default Product;