import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import LeftBar from '../../Common/LeftBar';
import Bitcoin from '../Bitcoin'

const Main = () => {
    return (
        <div className={styles.wrap} style={{ flex: 1 }}>
            <LeftBar />
            <div className={styles.content}>
                <Bitcoin />
            </div>
        </div>
    );
};

export default Main;
