import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';
import RecentTrades from '../RecentTrades';
import TrustedUser from '../TrustedUser';
import BlockedUser from '../BlockedUser';
import FavouriteOffer from '../FavouriteOffer';
import { ReactComponent as RecentTradesIcon } from '../../../../assets/images/recentTrades.svg';
import { ReactComponent as TrustedUserIcon } from '../../../../assets/images/trustedUser.svg';
import { ReactComponent as BlockedUserIcon } from '../../../../assets/images/blockedUser.svg';
import { ReactComponent as FavouriteIcon } from '../../../../assets/images/favourite.svg';

const Main = () => {
   
    const location = useLocation();
    const [tab, setTab] = useState(location.pathname === '/contact/trustedUser' ? 'trusted' : 'recent');
    return (
        <div className={`${'container'}`}>
            <div className={styles.wrap}>
                <h1 className={styles.heading}>Contact List</h1>
                <div className={styles.userContainer}>
                    <div className={styles.wrap}>
                        <button className={`${styles.tabContainer} ${tab === 'recent' && styles.active}`}
                            onClick={() => setTab('recent')}>
                            <RecentTradesIcon className={styles.tradeicon} />
                            <span>Recent Trades</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'trusted' && styles.active}`}
                            onClick={() => setTab('trusted')}>
                            <TrustedUserIcon className={styles.icon} />
                            <span>Trusted User</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'block' && styles.active}`}
                            onClick={() => setTab('block')}>
                            <BlockedUserIcon className={styles.icon} />
                            <span>Blocked User</span>
                        </button>
                        <button className={`${styles.tabContainer} ${tab === 'favourite' && styles.active}`}
                            onClick={() => setTab('favourite')}>
                            <FavouriteIcon className={styles.icon} />
                            <span>Favourite</span>
                        </button>
                    </div>
                    {
                        tab === 'recent' && <RecentTrades />
                    }
                    {
                        tab === 'trusted' && <TrustedUser />
                    }
                    {
                        tab === 'block' && <BlockedUser />
                    }
                    {
                        tab === 'favourite' && <FavouriteOffer />
                    }
                </div>
            </div>
        </div>
    );
};
export default Main;
