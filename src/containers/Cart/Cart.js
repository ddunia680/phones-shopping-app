import React from 'react';
import CartRecord from '../../components/CartRecord/CartRecord';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import { CLEARITEMS, SETCARTVISIBILITY } from '../../store/cart';
import classes from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';


const Cart = props => {
    let dispatch = useDispatch();
    const cartElements = useSelector(state => state.cart.cart);
    // console.log(cartElements);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    // const [elToDisplay, setElToDisplay] = useState([]);
    let filteredEl = [];

    const wrapperClasses = [classes.wrapper, props.showCart ? classes.cartVisible : classes.cartInvisible]

    for(let el of cartElements) {
        if(!filteredEl.find(newEl => newEl.name === el.name)) {
            filteredEl.push(el);
        }
    }

    const clearCart = () => {
        dispatch(CLEARITEMS());
        dispatch(SETCARTVISIBILITY(false));
    }

    return (
        <div className={wrapperClasses.join(' ')}>
            {cartElements.length ? 
            <>
                <h1>Your <span>Cart</span></h1>
                <div className={classes.recordsWrapper}>
                    <div className={classes.headers}>
                        <h3>PRODUCTS</h3>
                        <h3>NAME OF PRODUCTS</h3>
                        <h3>PRICE</h3>
                        <h3>QUANTITY</h3>
                        <h3>REMOVE</h3>
                        <h3>TOTAL</h3>
                    </div>
                    {filteredEl.map(el => (
                        <CartRecord 
                            image={el.image} 
                            name={el.name} 
                            price={el.price} 
                            key={el.id} 
                            id={el.id} 
                            elCount={cartElements.filter(item => item.name === el.name).length} 
                            elTotal={el.price * cartElements.filter(item => item.name === el.name).length}/>
                    ))}
                    {/* <CartRecord/> */}
                </div>
                <div className={classes.bigTotals}>
                    <button 
                        className={classes.clearCart} 
                        onClick={clearCart}>
                            CLEAR CART
                    </button>
                    <h2>SUBTOTAL : $ {+totalPrice}</h2>
                    <h2>TAX : $ 1</h2>
                    <h2>TOTAL : $ {+totalPrice + 1}</h2>
                    <PayPalScriptProvider options={{ "client-id": "test" }}>
                        <PayPalButtons style={{ layout: "horizontal" }}/>
                    </PayPalScriptProvider> 
                </div>
            </>
            : <h1>YOUR CART IS CURRENTLY EMPTY</h1>}
            
        </div>
    );
}

export default Cart;