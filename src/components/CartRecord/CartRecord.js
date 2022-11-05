import React from 'react';
import { DELETEITEM, DELETESINGLEEL, ADDITEM } from '../../store/cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

import classes from './CartRecord.module.css';
import { useDispatch, useSelector } from 'react-redux';


function CartRecord(props) {
    let articles = useSelector(state => state.articles.articles);
    let dispatch = useDispatch();

    const deleteItem = (id, price) => {
        let data = {id: id, price: price * props.elCount}
        dispatch(DELETEITEM(data));
    }
    
    const deleteSingleEl = (id, price) => {
        dispatch(DELETESINGLEEL({id: id, price: price }));
    }

    const addItem = (id) => {
        const element = articles.find(el => el.id === id);
        dispatch(ADDITEM(element));
        console.log(element);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.imageDiv}>
                <img src={props.image} alt='' />
            </div>
            <div>{props.name}</div>
            <div>$ {props.price}</div>
            <div className={classes.controls}>
                <button onClick={() => addItem(props.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button>{props.elCount}</button>
                <button onClick={() => deleteSingleEl(props.id, props.price)}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <div className={classes.trash}><FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(props.id, props.price)}/></div>
            <div>Item Total: {props.elTotal}</div>
        </div>
    );
}

export default CartRecord;