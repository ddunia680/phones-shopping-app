import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.svg';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from './toolbar.module.css';
function toolbar(props) {
    return (
        <div>
            <header className={classes.header}>
                <div onClick={() => props.setShowCart(false)}>
                    <span><img src={logo} alt='' /></span>
                    <p>Products</p>
                </div>
                <button onClick={() => props.setShowCart(prev => !prev)}>
                    <span>{<FontAwesomeIcon icon={faShoppingCart}/>}</span>
                    My Cart
                </button>
            </header>
        </div>
    );
}

export default toolbar;