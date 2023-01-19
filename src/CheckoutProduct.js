import React, { useContext } from 'react';
import './CheckoutProduct.css';
import { CartContext } from './CartContext';
import { getProductData } from './ProductStore';


function CheckoutProduct(props){

    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    const ratingDisp = () => {

        switch(productData.rating) {
            case 1: return '⭐';
            case 2: return '⭐⭐';
            case 3: return '⭐⭐⭐';
            case 4: return '⭐⭐⭐⭐';
            case 5: return '⭐⭐⭐⭐⭐';
            default: return 'No Ratings';
        }

    }

    return(

            <div className="checkoutProduct">
               <img src={`../images/${productData.image}`} alt="" className='checkoutProduct_image'/>

               <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">{productData.title}</p>
                    <p className="checkoutProduct_price">
                        <small>$</small>
                        <strong>{(quantity * productData.price).toFixed(2)}</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                    {ratingDisp()} ({productData.rating})
                    </div>
                    <div className='checkoutProduct_total'>
                        {quantity} total items
                    </div>

                    <button onClick={() => cart.deleteFromCart(id)}>Remove from Basket</button>

                    <hr></hr>
               </div>
            </div>

    )
}

export default CheckoutProduct