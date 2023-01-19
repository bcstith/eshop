import React, {useContext} from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { CartContext } from './CartContext';

function Subtotal() {

    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    const totalCost = cart.getTotalCost().toFixed(2);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        })
    }


    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText= {(value) =>(
                    <>
                        <p>Subtotal ({productsCount} items): <strong>${totalCost}</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                ) }
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
            />

            <button onClick={checkout}>Purchase Items</button>
        </div>
    )
}

export default Subtotal;