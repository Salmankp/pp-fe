import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import info from "../../../../assets/images/greyInfoIcon.svg";

const SettingRow = ({ item, handleChange, value }) => {
    const [val, setValue] = useState([]);

    useEffect(() => {
        setValue(value)
    }, [value?.length])

    return <tr key={item.key} className={styles.data}>
        <td>
            <div>
                <span className={styles.tableTxt}>
                    {item?.label}
                </span>
                <img src={info} alt="icon" />
            </div>
        </td>
        <td>
            <div className={styles.center}>
                <input className={styles.checkbox} type="checkbox" checked={val?.find(el => el === 'web')} onChange={(e) => handleChange(e, item?.key)} name='web' />
            </div>
        </td>
        <td>
            <div className={styles.center}>
                <input className={styles.checkbox} checked={val?.find(el => el === 'email')} type="checkbox" onChange={(e) => handleChange(e, item?.key)} name='email' />
            </div>
        </td>
        <td>
            <div className={styles.center}>
                <input className={styles.checkbox} checked={val?.find(el => el === 'telegram')} type="checkbox" onChange={(e) => handleChange(e, item?.key)} name='telegram' />
            </div>
        </td>
        <td>
            <div className={styles.center}>
                <input className={styles.checkbox} checked={val?.find(el => el === 'app')} type="checkbox" onChange={(e) => handleChange(e, item?.key)} name='app' />
            </div>
        </td>
    </tr>
}

export default SettingRow;