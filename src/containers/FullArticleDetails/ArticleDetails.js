import React from 'react';

import classes from './ArticleDetails.module.css';
import prod from './image/product-2.png';

const ArticleDetails = props => {
    const wrapperClasses = [classes.wrapper, props.showDetails ? classes.Visible : classes.Invisible];
    return (
        <div className={wrapperClasses.join(' ')}>
            <h1>Samsung S7</h1>
            <div className={classes.detailsWrapper}>
                <div className={classes.imageWr}>
                    <img src={prod} alt='' />
                </div>
                <div className={classes.wordsWrapper}>
                    <h1>Model: Samsung S7 </h1>
                    <h2 className={classes.model}>MADE BY : SAMSUNG</h2>
                    <h2 className={classes.price}>PRICE : $ 16</h2>
                    <h5>Some Info About Product: </h5>
                    <h4>That's a little messy. Try jsfiddle.net/n8JEy/4 - and you didn't pass i to the callback as the second param
                    Ian
                    Apr 14, 2013 at 5:39
                    @Ian I tend to prefer readability, but your solution is certainly more efficient. I also added the index as the second parameter (simply ignored it originally as it was not used, and I assumed that he didn't need it).
                    pickypg
                    Apr 14, 2013 at 5:45
                    @dk123 As a newcomer to JavaScript, you are free to control the parameters of such callbacks as you see fit, and you can add whatever you want to them so long as the information is available (e.g., you could add the current array's length using this.length as a third parameter, if you had some inclination). 
                    pickypg
                    Apr 14, 2013 at 5:48</h4>
                    <div className={classes.buttonWrapper}>
                        <button 
                            className={classes.back}
                            onClick={() => props.setShowDetails(false)}
                        >
                            Back To Products
                        </button>
                        <button 
                            className={classes.toCart}
                            onClick={() => {
                                props.setShowDetails(false);
                                props.setShowCart(prev => !prev);
                            }}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetails;