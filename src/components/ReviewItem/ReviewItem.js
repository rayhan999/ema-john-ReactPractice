import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.product);
    const { name, quantity, key, price } = props.product;
    //console.log(quantity);
    return (
        <div>
            <h4 className="productName">{name}</h4>
            <h4>Quantity:{quantity}</h4>
            <p>Price: ${price}</p>
            <button className="nameBtn" onClick={() => props.removedProducts(key)}>Remove</button>

        </div>
    );
};

export default ReviewItem;