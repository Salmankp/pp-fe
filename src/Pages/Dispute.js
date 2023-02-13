import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Main from './Components/Dispute/Main'
const Dispute = () => {
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

export default Dispute;