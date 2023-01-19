import React, {useContext} from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { CartContext } from './CartContext';

function Checkout(){

    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  
    return(
        <div className="checkout">
            <div className="checkout_left">
                <img src="../images/728x90_banner_ad.jpg" alt="" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>

                    {
                        productsCount > 0 ?
                        <>
                        <h1>Items in you Cart</h1>
                            {cart.items.map((currentProduct, idx) => (
                                <CheckoutProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>
                            ))}
                         </>
                        :

                        <h1>There are no items isn your cart</h1>

                    }
                </div>
            </div>
            <div className="checkout_right">

                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout;