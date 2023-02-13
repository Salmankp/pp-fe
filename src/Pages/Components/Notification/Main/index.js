import React, { useState } from 'react';
import Inbox from '../Inbox';
import Moderators from '../Moderators';
import styles from './styles.module.scss';
const Main = () => {
    const [tab, setTab] = useState('inbox');
    return (
        <div className="container">
            <div className={styles.wrap}>
                <h1 className={styles.heading}>Notifications</h1>
                <div className={styles.tabs}>
                    <div
                        className={`${styles.tab} ${tab === 'inbox' && styles.active}`}
                        onClick={() => setTab('inbox')}
                    >
                        Inbox
                    </div>
                    <div
                        className={`${styles.tab} ${tab === 'moderator' && styles.active
                            }`}
                        onClick={() => setTab('moderator')}
                    >
                        Moderators
                    </div>
                </div>
                {tab === 'inbox' && <Inbox />}
                {tab === 'moderator' && <Moderators />}
            </div>
        </div>
    );
};
export default Main;
