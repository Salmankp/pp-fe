import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { markAsRead } from '../../../../actions/notification-actions';
import styles from './styles.module.scss';
const Inbox = () => {
    const dispatch = useDispatch();
    const { notifications } = useSelector(state => state?.notifications);

    const markAsReadHandler = async () => {
        await dispatch(markAsRead())
      }

    return (
        <div className={styles.wrap}>
            <div className={styles.btnContainer}>
                <button className={styles.markBtn} onClick={markAsReadHandler}>Mark as read</button>
            </div>
            {
                notifications?.map(el => (<div className={styles.alignment} key={el?._id}>
                    <div className={styles.directionCol}>
                        <h4 className={styles.title}>{el?.type}</h4>
                        <Link to={`/${el?.link}`} className={styles.description}>
                            {el?.description}
                        </Link>
                    </div>
                    <span className={styles.time}>{moment(el?.createdAt).fromNow()}</span>
                </div>))
            }
        </div>
    );
};
export default Inbox;
