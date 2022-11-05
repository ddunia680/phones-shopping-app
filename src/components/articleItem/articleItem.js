import React, { useEffect, useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import classes from './articleItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Transition from 'react-transition-group/Transition';

function ArticleItem(props) {
    const [cartOption, setCartOption] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const imgWrapperClass = !cartOption ? classes.imgWrapper : classes.imgFocus;
    let insideButton = !isInCart ? <FontAwesomeIcon icon={faShoppingCart} /> : 'In Cart';

    const cartOptClasses = [classes.CartOption, cartOption ? classes.cartOptVisible : classes.cartOptionInvisible];

    const showCartOption = () => {
        setCartOption(true);
        // console.log('cart can come');
    }

    const removeCartOption = () => {
        setCartOption(false);
        // console.log('cart can go');
    }

    useEffect(() => {
        setIsInCart(false);
    }, [cartOption])

    const handleClick = id => {
        props.addToCart(id);
        props.backVisible(true);
        setIsInCart(true);
    }

    return (
        <div className={classes.wrapper} onMouseOver={showCartOption} onMouseLeave={removeCartOption}>
            <div className={imgWrapperClass}>
                <img className={classes.artImage} src={props.image} alt='' onClick={() => {
                    props.setID(props.id);
                    props.showDetails(true);
                }}/>
            </div>
            <div className={classes.info}>
                <h5>{props.name}</h5>
                <h5 className={classes.price}><i>$ {props.price}</i></h5>
            </div>
            <Transition 
                in={cartOption} 
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <div 
                        className={cartOptClasses.join(' ')} 
                        onClick={() => handleClick(props.id)}
                    >
                        {insideButton}
                    </div>
                )}
                
            </Transition>
            
            
        </div>
    );
}

export default ArticleItem;