import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])
    const removedProducts = (productKey) => {
        console.log('remove clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handleOrderPlaces = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {

                    cart.map(pd => <ReviewItem key={pd.key} product={pd} removedProducts={removedProducts}></ReviewItem>)
                }
                {
                    orderPlaced && <img src={happyImage} alt=""></img>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="nameBtn" onClick={handleOrderPlaces}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;