import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ReactSelect from "../../Common/ReactSelect";
import profile from "../../../../assets/images/userprofileIcon.svg";
import editIcon from "../../../../assets/images/editIcon.svg";
import scaleIcon from "../../../../assets/images/scaleIcon.svg";
import web from "../../../../assets/images/web2.svg";
import email from "../../../../assets/images/msg.svg";
import telegram from "../../../../assets/images/telegram.svg";
import apps from "../../../../assets/images/app.svg";
import { useDispatch, useSelector } from "react-redux";
import mark from "../../../../assets/images/questionMark.svg";
import { updateUser, updateUserSettings } from "../../../../actions/user-actions";
import { getUser } from "../../../../actions/user-actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingRow from "./settingRow";


const options = [
  {
    value: "+92",
    label: <span className={styles.selectTxt}>+92 </span>
  },
  {
    value: "+93",
    label: (
      <div>
        <span className={styles.selectTxt}>+93 </span>{" "}
      </div>
    )
  },
  {
    value: "+94",
    label: (
      <div>
        <span className={styles.selectTxt}>+94 </span>{" "}
      </div>
    )
  }
];

const settingKeys = [
  { label: 'Bitcoin price change', key: 'bitcoinPriceChange' },
  { label: 'Buyer started uploading cards', key: 'buyerStartedUploadingCards' },
  { label: 'Cryptocurrency deposit confirmed', key: 'cryptocurrencyDepositConfirmed' },
  { label: 'Cryptocurrency deposit pending', key: 'cryptocurrencyDepositPending' },
  { label: 'Cryptocurrency purchased', key: 'cryptocurrencyPurchased' },
  { label: 'Cryptocurrency sent', key: 'cryptocurrencySent' },
  { label: 'Cryptocurrency sold', key: 'cryptocurrencySold' },
  { label: 'Funds reserved for trade', key: 'fundsReservedForTrade' },
  { label: 'Incoming trade', key: 'incomingTrade' },
  { label: 'New chat message', key: 'newChatMessage' },
  { label: 'New moderator message', key: 'newModeratorMessage' },
  { label: 'Partner paid for trade', key: 'partnerPaidForTrade' },
  { label: 'Someone viewed my profile', key: 'someoneViewedMyProfile' },
  { label: 'Tether price change', key: 'tetherPriceChange' },
  { label: 'Trade cancelled/expired', key: 'tradeCancelledExpired' }
]

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.loggedInUser);
  // const userDataL = useSelector(state => state.userData);
  let settingsState = userData?.userInfo?.data?.notificationSettings;
  let name = userData?.userInfo?.data?.user?.name;
  const [Name, setName] = useState(name);
  let phoneNumber = userData?.userInfo?.data?.user?.phoneNumber;
  const [phoneNo, setPhoneNo] = useState(phoneNumber);
  let currency = userData?.userInfo?.data?.user?.currency;
  const [Currency, setCurrency] = useState(currency);
  let language = userData?.userInfo?.data?.user?.language;
  const [Language, setLanguage] = useState(language);
  let bio = userData?.userInfo?.data?.user?.bio;
  const [Bio, setBio] = useState(bio);
  let Pic = userData?.userInfo?.data?.user?.profilePic;
  const [pic, setPic] = useState(Pic);
  const [settings, setSettings] = useState({});
  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const convertToBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        let base = fileReader.result;
        resolve(base.slice(base.indexOf(",") + 1));
      };
      fileReader.onerror = error => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPic(base64);
  };

  const UserDataSave = () => {
    const id = userData?.userInfo?.data?.user?._id;
    const email = userData?.userInfo?.data?.user?.email;
    let phone_verified = phoneNo;
    let email_verified;
    if (email) {
      email_verified = true;
    } else {
      email_verified = false;
    }
    if (phone_verified) {
      phone_verified = true;
    } else {
      phone_verified = false;
    }
    let option = {
      name: Name,
      phoneNumber: phoneNo,
      currency: Currency,
      language: Language,
      bio: Bio,
      profilePic: pic,
      email_verified: email_verified,
      phone_verified: phone_verified,
    };
    dispatch(updateUser(option, id));
  };

  const handleChange = async (e, item) => {
    if (e.target.name === 'notificationTimeInterval') {
      return await dispatch(updateUserSettings({ [e.target.name]: e.target.value }));
    } else if (e.target.name === 'smsNotifications' || e.target.name === 'occasionalEmails' || e.target.name === 'playSound') {
      return await dispatch(updateUserSettings({ [e.target.name]: e.target.checked ? true : false }));
    }
    let tempArr = settingsState && settingsState[item] ? settingsState[item] : [];
    if (e.target.checked) {
      tempArr.push(e.target.name)
    } else {
      tempArr = tempArr.filter(item => item !== e.target.name);
    }

    await dispatch(updateUserSettings({ [item]: tempArr }));
  }



  return (
    <div className={styles.wrap}>
      <div className={styles.smContainer}>
        <div className={styles.topRow}>
          <h1 className={styles.heading}>User Profile</h1>
          <span className={styles.description}>
            {userData?.userInfo?.data?.user?.email}
          </span>
          <div className={styles.profileContainer}>
            <div className={styles.mgRight}>
              <div className={styles.profileImg}>
                <input
                  style={{ display: "none" }}
                  ref={hiddenFileInput}
                  type="file"
                  size="600"
                  onChange={(e) => handleFileUpload(e)}
                />
                {pic ? (<img className={styles.img} src={`data:image/jpeg;base64,${pic}`} />) : (<img className={styles.img} src={profile} alt="Profile" />)}
                <img
                  className={styles.editIcon}
                  src={editIcon}
                  alt="edit Icon"
                  onClick={handleClick}
                />
              </div>
              <span className={styles.userName}>{Name}</span>
            </div>
            <div>
              <p className={styles.metaInfo}>
                Upload a nice picture, preferably of yourself. If you upload any
                explicit or otherwise inappropriate image, we’ll remove it
                immediately.
              </p>
            </div>
          </div>
          <div className={styles.fieldWrap}>
            <label>Username</label>
            <div className={styles.field2}>
              <input
                onChange={e => {
                  setName(e.target.value);
                }}
                type="text"
                value={Name}
              />
            </div>
          </div>
          <div className={styles.fieldWrap}>
            <label>Phone Number</label>
            <div className={styles.field2}>
              <div>
                <ReactSelect
                  backgroundColor={"#fff"}
                  border={"none"}
                  height="35px"
                  minHeight={"35px"}
                  options={options}
                />
              </div>
              <input
                onChange={e => {
                  setPhoneNo(e.target.value);
                }}
                type="number"
                value={phoneNo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.smContainer}>
        <div className={styles.bottomRow}>
          <div className={styles.fieldWrap}>
            <div className={styles.label}>Prefered Currency</div>
            <div className={styles.field}>
              <select>
                <option>{Currency}</option>
              </select>
            </div>
          </div>
          <div className={styles.fieldWrap}>
            <div className={styles.label}>Languages</div>
            <div className={styles.field}>
              <input
                onChange={e => {
                  setLanguage(e.target.value);
                }}
                type="text"
                value={Language}
              />
            </div>
          </div>
          <div className={styles.fieldWrap}>
            <div className={styles.label}>Bio</div>
            <textarea
              className={styles.txtArea}
              rows="4"
              placeholder="Your bio Appear on your public profile"
              onChange={e => {
                setBio(e.target.value);
              }}
              value={Bio}
            ></textarea>
            {/* <span className={styles.subTxt}>180 Characters left</span> */}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <button
              onClick={UserDataSave}
              className={styles.saveBtn}
              style={{
                backgroundColor: "#1FC28F",
                border: "1px solid #1FC28F",
                fontSize: "16px",
                fontWeight: "500",
                textAlign: "center",
                justifyContent: "center",
                height: "34px",
                maxWidth: "70px",
                width: "100%",
                borderRadius: "7px"
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className={styles.outerSpace}>
        <div className={styles.checkboxWrap}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>
                  <p className={styles.title}>Select All</p>
                </th>
                <th>
                  <div className={styles.alignment}>
                    <div className={styles.iconContainer}>
                      <img src={web} alt="icon" />
                    </div>
                    <span className={styles.title}>Web</span>
                  </div>
                </th>
                <th>
                  <div className={styles.alignment}>
                    <div className={styles.iconContainer}>
                      <img src={email} alt="icon" />
                    </div>
                    <span className={styles.title}>Email</span>
                  </div>
                </th>
                <th>
                  <div className={styles.alignment}>
                    <div className={styles.iconContainer}>
                      <img src={telegram} alt="icon" />
                    </div>
                    <span className={styles.title}>Telegram</span>
                  </div>
                </th>
                <th>
                  <div className={styles.alignment}>
                    <div className={styles.iconContainer}>
                      <img src={apps} alt="icon" />
                    </div>
                    <span className={styles.title}>App</span>
                  </div>
                </th>
              </tr>
              {
                settingKeys?.map(item => <SettingRow key={item.key} handleChange={handleChange} item={item} value={settingsState?.[item.key]} />)
              }

            </tbody>
          </table>
        </div>
        <div className={styles.info}>

          <div className={styles.alignment}>
            <div>

              <div className={styles.bottomRow} style={{paddingLeft: 0, marginTop: 0}}>
                <div className={styles.fieldWrap}>
                  <div className={styles.label}>Time Interval</div>
                  <div className={styles.outer}>
                    <div className={styles.field} style={{width: '100%'}}>
                      <input
                        onChange={handleChange}
                        type="number"
                        value={settingsState['notificationTimeInterval']}
                        name={'notificationTimeInterval'}
                      />
                    </div>
                    <span className={styles.txt}>Minutes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <span>
                How often would you like be notified of new chat messages? Enter
                0 to be notified of every new message.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.blockContainer}>
          <div className={styles.checkblock}>
            <input className={styles.checkbox} type="checkbox" name='playSound' checked={settingsState['playSound']} onChange={handleChange} />
            <span>Play notification sound for new messages and trades</span>
          </div>
          <div className={styles.checkblock}>
            <input className={styles.checkbox} type="checkbox" name='occasionalEmails' checked={settingsState['occasionalEmails']} onChange={handleChange} />
            <span>Receive important emails from us occasionally</span>
          </div>
          <div className={styles.checkblock}>
            <input className={styles.checkbox} type="checkbox" name='smsNotifications' checked={settingsState['smsNotifications']} onChange={handleChange} />
            <span>
              Receive SMS notification for confirmed cryptocurrency deposits
            </span>
            <img src={mark} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
