import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SETCARTVISIBILITY } from '../../store/cart';
import logo from './images/logo.svg';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './toolbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
function Toolbar(props) {
    let dispatch = useDispatch();
    let showCart = useSelector(state => state.cart.cartVisible);
    return (
        <div>
            <header className={classes.header}>
                <div>
                    <span><img src={logo} alt='' /></span>
                    <p onClick={() => dispatch(SETCARTVISIBILITY(false))}>Products</p>
                </div>
                <h3 className={classes.cartDiv} onClick={() => dispatch(SETCARTVISIBILITY(!showCart))}>
                    <span>{<FontAwesomeIcon icon={faShoppingCart}/>}</span>
                    My Cart
                </h3>
            </header>
        </div>
    );
}

export default Toolbar;