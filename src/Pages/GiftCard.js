import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Main from './Components/GiftCard/Main'
const GiftCard = () => {
    return (
        <div
            className='layout'
        >
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default GiftCard;