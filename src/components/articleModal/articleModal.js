import React from 'react';

import classes from './articleModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SETCARTVISIBILITY } from '../../store/cart';

const ArticleModal = props => {
    const articles = useSelector(state => state.articles.articles);
    const theElement = articles.find(el => el.id === props.elementID);
    let dispatch = useDispatch();

    const wrapperClasses = [classes.wrapper, props.isVisible ? classes.modalOn : classes.modalOut ]
    return (
        <div className={wrapperClasses.join(' ')}>
            <h3>Item Added To Cart</h3>
            <div className={classes.imageDiv}>
                <img src={theElement.image} alt=''/>
            </div>
            <div className={classes.details}>
                <h3>{theElement.name}</h3>
                <h3 className={classes.price}>Price: $ {theElement.price}</h3>
                <button onClick={() => props.ModalVisible(false)}>
                    Continue Shopping
                </button>
                <button 
                    className={classes.GoToCart} 
                    onClick={() => {
                        dispatch(SETCARTVISIBILITY(true));
                        props.ModalVisible(false);
                    }}>
                        Go To Cart
                </button>
            </div>
        </div>
    );
}

export default ArticleModal;