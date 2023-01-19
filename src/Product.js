import React from 'react';
import "./Product.css";
import { CartContext } from './CartContext';
import { useContext } from 'react';


function Product(props){

    const product = props.item;
    const cart= useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    console.log(cart.items)

    const ratingDisp = () => {

        switch(product.rating) {
            case 1: return '⭐';
            case 2: return '⭐⭐';
            case 3: return '⭐⭐⭐';
            case 4: return '⭐⭐⭐⭐';
            case 5: return '⭐⭐⭐⭐⭐';
            default: return 'No Ratings';
        }

    }


    return (
        <>
            <div className="product">
                <div className="product_info">
                    <p>{product.title}</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>{product.price}</strong>
                    </p>
                    <div className="product_rating"> {ratingDisp()} ({product.rating})</div>
                </div>

                <img src={`../images/${product.image}`}  alt="product" />

                {
                    productQuantity > 0 ?

                        <div>
                            <label column="true" sm="6">In Cart: {productQuantity}</label>
                            <div>
                                <button onClick={() => cart.addOneToCart(product.id)}>+</button>
                                <button onClick={() => cart.removeOneFromCart(product.id)}>-</button>
                            </div>

                            <button onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</button>
                        </div>


                    :
                    <button onClick={() => cart.addOneToCart(product.id)}>Add to basket</button>
                }

            </div>
        </>
    )
}

export default Product