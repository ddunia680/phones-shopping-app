import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleItem from '../../components/articleItem/articleItem';
import { ADDITEM } from '../../store/cart';

import classes from './phonesDisplay.module.css';

const PhonesDisplay = props => {
    const articles = useSelector(state => state.articles.articles);
    let dispatch = useDispatch();

    const addToCart = id => {
        props.setID(id);
        const theElement = articles.find(el => el.id === id);
        dispatch(ADDITEM(theElement));
    }
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.mainTitle}>OUR <span>PRODUCTS</span></h1>

            <div className={classes.articlesWrapper}>
                {articles.map(el => {
                    return <ArticleItem image={el.image} name={el.name} price={el.price} key={el.id} id={el.id} addToCart={addToCart} backVisible={props.backVisible} showDetails={props.showDetails}/>
                })}
            </div>
        </div>
    );
}

export default PhonesDisplay;