import React from 'react';



const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;

    }
    let shipping = 0;
    if (total > 350) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 9.99;
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered:{cart.length}</p>
            <p><small> Product Price: {total}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total: {total + shipping}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;