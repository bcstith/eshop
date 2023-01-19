import React from 'react';
import "./Home.css";
import Product from "./Product";
import {productsArray} from "./ProductStore";


function Home(){
    return(
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt=""
                    className="home_image" />

                    <div className="home_row">

                    {productsArray.slice(0,2).map( item => (
                        <Product item={item} />
                    ))};

                    </div>
                    <div className="home_row">
                    {productsArray.slice(2,5).map( item => (
                         <Product item={item} />
                    ))};

                    </div>
                    <div className="home_row">

                        {productsArray.slice(5,6).map( item => (
                            <Product item={item} />
                        ))};
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;