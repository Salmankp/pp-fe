import React, { useState } from 'react';
import styles from './styles.module.scss';
import Profile from '../Profile';
import Security from '../Security';
import PaymentMethod from '../PaymentMethod';
import Developer from '../Developer';
import Connected from '../Connected';
import SecurityQuestion from '../SecurityQuestion';
import { ReactComponent as ProfileIcon } from '../../../../assets/images/profileVector.svg';
import { ReactComponent as SecurityIcon } from '../../../../assets/images/securityVector.svg';
import { ReactComponent as PymentIcon } from '../../../../assets/images/paymentMethod.svg';
import { ReactComponent as DeveloperIcon } from '../../../../assets/images/developer.svg';
import { ReactComponent as ConnectedIcon } from '../../../../assets/images/connected.svg';
import { ReactComponent as InfoIcon } from '../../../../assets/images/cardInfoIcon.svg';

const Main = () => {
    const [tab, setTab] = useState('profile');
    return (
        <div className={`${'container'}  ${'layout'}`}>
            <div className={styles.wrap}>
                <h1 className={styles.heading}>Account Settings</h1>
                <div className={styles.userContainer}>
                    <div className={styles.wrap}>
                        <button className={`${styles.tabContainer} ${tab === 'profile' && styles.active}`}
                            onClick={() => setTab('profile')}>
                            <ProfileIcon className={styles.icon} />
                            <span>Profile</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'security' && styles.active}`}
                            onClick={() => setTab('security')}>
                            <SecurityIcon className={styles.icon} />
                            <span>Security</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'paymentMethod' && styles.active}`}
                            onClick={() => setTab('paymentMethod')}>
                            <PymentIcon className={styles.icon} />
                            <span>Payment Method</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'developer' && styles.active}`}
                            onClick={() => setTab('developer')}>
                            <DeveloperIcon className={styles.icon} />
                            <span>Developer</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'securityQuestion' && styles.active}`}
                            onClick={() => setTab('securityQuestion')}>
                            <InfoIcon className={styles.securityicon} />
                            <span>Security Questions</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'connected' && styles.active}`}
                            onClick={() => setTab('connected')}>
                            <ConnectedIcon className={styles.icon} />
                            <span>Connected Apps & Websites</span>
                        </button>
                    </div>
                    {
                        tab === 'profile' && <Profile />
                    }
                    {
                        tab === 'security' && <Security />
                    }
                    {
                        tab === 'paymentMethod' && <PaymentMethod />
                    }
                    {
                        tab === 'developer' && <Developer />
                    }
                    {
                        tab === 'connected' && <Connected />
                    }
                    {
                        tab === 'securityQuestion' && <SecurityQuestion />
                    }
                </div>
            </div>
        </div>
    );
};
export default Main;
