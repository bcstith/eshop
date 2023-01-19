import React, {useContext} from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';


function Header() {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


        return(

            <div className="header">

            <Link to="/" style={{ textDecoration: "none"}}>
                <div className="header_logo">
                    <StorefrontIcon className="header_logoImage" fontSize='large' />
                    <h2 className="header_logoTitle">eShop</h2>
                </div>
            </Link>

            <div className="header_search">
                <input type="text" className='header_searchInput' /> <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>
                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>

                <Link to="/checkout" style={{ textDecoration: "none"}}>
                    <div className="nav_itemBasket">
                        <ShoppingBasketIcon fontSize="large" />
                        <span className="nav_itemLineTwo nav_basketCount">({productsCount} Items)</span>
                    </div>
                </Link>
            </div>
        </div>

        )

}


export default Header;