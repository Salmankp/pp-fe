import React from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Main from './Components/Notification/Main';

const Notification = () => {
    return (
        <div className='layout'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Notification;