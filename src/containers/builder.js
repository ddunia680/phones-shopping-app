import React, { useState } from 'react';
import Toolbar from './toolbar/toolbar';
import PhonesDisplay from './phonesDisplay/phonesDisplay';
import Backdrop from '../UI/Backdrop/Backdrop';
import ArticleModal from '../components/articleModal/articleModal';
import Transition from 'react-transition-group/Transition';
import Cart from './Cart/Cart';
import ArticleDetails from './FullArticleDetails/ArticleDetails';
import { useSelector } from 'react-redux';
// import { SETCARTVISIBILITY } from '../store/cart';

function Builder() {
    const [modalVisible, setModalVisibility] = useState(false);
    const [modalElID, setModalElID] = useState();
    const showCart = useSelector(state => state.cart.cartVisible);
    const [showDetails, setShowDetails] = useState(false);
    // console.log(showCart);
    return (
        <div>
            <Toolbar/>
            <PhonesDisplay 
                backVisible={setModalVisibility} 
                setID={setModalElID}
                showDetails={setShowDetails}
            />
            { modalVisible ? 
                <Backdrop clicked={setModalVisibility}/> 
            : null}
            <Transition
                in={modalVisible}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <ArticleModal 
                        isVisible={modalVisible} 
                        elementID={modalElID ? modalElID : null}
                        ModalVisible={setModalVisibility}
                    />
                )}
            </Transition>
            <Transition
                in={showCart}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                <Cart showCart={showCart}/>
            </Transition>
            <Transition
                in={showDetails}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <ArticleDetails 
                        id={modalElID ? modalElID : null}
                        showDetails={showDetails} 
                        setShowDetails={setShowDetails}/>
                )}
            </Transition>
            
            
        </div>
    );
}

export default Builder;