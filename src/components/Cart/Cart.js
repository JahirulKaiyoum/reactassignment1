import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    const courseTitle = props.cart.courseTitle
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const courseprice = cart[i].price;
        totalPrice += courseprice;

        
    }

    return (
        <div className="cart-style">
            <h2 className="text-center">Order summary</h2>
            <h4 className="text-center">Items in cart:{props.cart.length}</h4>
            <h4 className="text-center">Total Price:${totalPrice}</h4>
            

        </div>
    );
};

export default Cart;