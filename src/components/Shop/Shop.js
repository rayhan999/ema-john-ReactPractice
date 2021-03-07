import React, { useEffect, useState } from 'react';
import fakedata from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakedata.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const prevCart = productKeys.map(existingKey => {
            const product = fakedata.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(prevCart);
    }, [])
    const handleAddproduct = (product) => {
        // console.log("Button handling", product);
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);

        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product => <Product key={product.key} product={product} showAddToCart={true} handleAddproduct={handleAddproduct}>{product.name}</Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="nameBtn">Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;