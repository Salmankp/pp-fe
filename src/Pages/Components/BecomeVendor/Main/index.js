import React from 'react'
import styles from './styles.module.scss';
import Splash from '../SplashSection';
import ListSection from '../ListSection';
import DashboardSection from '../DashboardSection';
import TradeGraph from '../TradeGraph';
import TradeSection from '../TradeSection';
import Feedback from '../Feedback';
import EarnMore from '../EarnMore';


const Main = () => {
    return (
        <div className={styles.wrap}>
            <Splash />
            <ListSection />
            <DashboardSection />
            <TradeGraph />
            <TradeSection />
            <Feedback />
            <EarnMore />
        </div>
    );
};

export default Main;
