import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { Dropdown, Badge } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Bitcoin from "../../GiftCard/Bitcoin";
import logo from "../../../../assets/images/logo.svg";
import whiteArrow from "../../../../assets/images/whiteArrow.svg";
import bellIcon from "../../../../assets/images/bellIcon.svg";
import profile from "../../../../assets/images/profileImg.png";
import arrowDown from "../../../../assets/images/arrowDown.svg";
import bitcoin from "../../../../assets/images/bitcoin.svg";
import tether from "../../../../assets/images/tether.svg";
import ethereum from "../../../../assets/images/ethereum.svg";
import errorIcon from "../../../../assets/images/error_outline.svg";
import icon from "../../../../assets/images/digitalCurrencyIcon.svg";
import userIcon from "../../../../assets/images/userIcon.svg";
import paymentIcon from "../../../../assets/images/paymentIcon.svg";
import settingIcon from "../../../../assets/images/settingIcon.svg";
import tradeHistory from "../../../../assets/images/tradeHistory.svg";
import tradePartner from "../../../../assets/images/tradePartner.svg";
import invite from "../../../../assets/images/invite.svg";
import join from "../../../../assets/images/join.svg";
import logout from "../../../../assets/images/logout.svg";
import Card from "../Card";
import { listBuys } from "../../../../actions/buy-actions";
import { listSells } from "../../../../actions/sell-actions";
import { useLocation } from "react-router-dom";
import bars from "../../../../assets/images/hamIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi, deleteUserSession, updateUserActivity } from "../../../../actions/user-actions";
import { useNavigate } from "react-router-dom";
import { handleGiftCardModal } from "../../../../actions/giftCard-actions";
import GiftCardModal from "../../GiftCard/Bitcoin/GiftModal/index";
import { USER_LOGIN_LOGOUT } from "../../../../constants/user-constants";
import {
  getPendingTransaction,
  updateReleaseData,
  updateTransactionData
} from "../../../../actions/transaction-actions";
import platform from "platform";
// import { socket } from "../../../Components/Common/ChatBox/index";
import { getNotifications, markAsRead,getNotificationsUser } from "../../../../actions/notification-actions";
import { SocketContext } from '../../../../utils/socket'

const Header = () => {
  const socket = useContext(SocketContext)
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState("moderators");
  const [showCom, setShowComp] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const { notifications, unRead } = useSelector(state => state?.notifications);
  const offers = useSelector(state => state?.buyList?.buy?.offers);
  const transactionData = useSelector(state => state?.transactionData);
  const userDataL = useSelector(state => state.userData);
  const [pendinngTransaction, setPendinngTransaction] = useState([]);

  const { userInfo } = useSelector(state => state.loggedInUser);
  const pic = userInfo?.data?.user?.profilePic;
  const { data } = userInfo;
  const [type, setType] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const [ip, setIp] = useState("");

  const bName = platform.name;

  const typeBuySelected = type => {
    if (type === "bitcoin" && type !== undefined) {
      dispatch(listBuys("", "", type));
    } else if (type === "USDT" && type !== undefined) {
      dispatch(listBuys("", "", type));
    } else if (type === "ethereum" && type !== undefined) {
      dispatch(listBuys("", "", type));
    }
  };

  const typeSellSelected = type => {
    if (type === "bitcoin" && type !== undefined) {
      dispatch(listSells("", "", type));
    } else if (type === "USDT" && type !== undefined) {
      dispatch(listSells("", "", type));
    } else if (type === "ethereum" && type !== undefined) {
      dispatch(listSells("", "", type));
    }
  };

  const toggle = () => {
    let x = document.querySelector("#toggleNav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  
  const userLogout = async () => {
    const getSession = data?.user?.activeSessions?.filter(item => item.ipAddress === ip && item.browser === bName);
    if(getSession?.length > 0){
      await dispatch(deleteUserSession(getSession[0]._id));
    }
    await dispatch(updateUserActivity('User logout'));
    dispatch({
      type: USER_LOGIN_LOGOUT
    });
    dispatch(logoutApi(data?.user?._id));
    navigate("/login");
  };

  const navigateToRelease = async offerDetails => {
    dispatch(
      updateReleaseData({
        trading_id: offerDetails?.transactionId,
        _id: offerDetails?._id,
        offer_id: offerDetails?.offerId,
        status: offerDetails?.status,
        started: offerDetails?.started,
        buyerId: offerDetails.buyerId,
        value: offerDetails.cryptoAmount,
        sellerId: offerDetails.sellerId
      })
    );

    navigate("/trade?status=buy");
  };
  const navigateToDispute = async offerDetails => {
    // dispatch(
    //   updateReleaseData({
    //     trading_id: offerDetails?.transactionId,
    //     _id: offerDetails?._id,
    //     offer_id: offerDetails?.offerId,
    //     status: offerDetails?.status,
    //     started: offerDetails?.started
    //   })
    // );

    dispatch(updateTransactionData(offerDetails));
    navigate("/dispute");
  };
  const navigateTo = offer => {
    console.log(offer, userInfo?.data?.user?._id);
    if (offer?.sellerId?._id === userInfo?.data?.user?._id)
      navigateToRelease(offer);
    else if (offer?.buyerId?._id === userInfo?.data?.user?._id)
      navigateToDispute(offer);
  };
  useEffect(() => {
    setIp(localStorage.getItem("ipAddress"));
    (async () => {
      setPendinngTransaction(await dispatch(getPendingTransaction()));
      await dispatch(getNotificationsUser())
    })();
  }, []);

  useEffect(() => {

    if (socket) {
      socket.emit('handshake', { id: data?.user?._id })
      socket?.on('notification', async (msg) => {
        console.log(msg , '===================new notification ====>>>>.');
       })
    }
    return () => {
      socket && socket?.off()
    }
  }, [socket])

  // useEffect(() => {
  //   if (!isFirstRender?.current) {
  //     socket.on("notification-recieved", data => {
  //       setPendinngTransaction(oldArray => [data, ...oldArray]);
  //     });
  //   }
  //   return () => {
  //     isFirstRender.current = false;
  //   };
  // }, [socket]);
  const dates = new Set();

  const renderDate = date => {
    const timestampDate = moment.utc(date).local().endOf("day").fromNow();
    // Add to Set so it does not render again
    // dates.add(dateNum);
    return <>{timestampDate}</>;
  };

  const markAsReadHandler = async () => {
    await dispatch(markAsRead())
  }

  return (
    <div className={styles.bgColor}>
      <GiftCardModal />
      <div className={styles.wrap}>
        <div className={styles.logo_navWrap}>
          <div className={styles.barContainer} onClick={toggle}>
            <img src={bars} alt="icon" />
          </div>
          <div className={styles.logo_name_wrap}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.name}>Logo</div>
          </div>
          <ul className={styles.nav} id="toggleNav">
            <li>
              <NavLink className={styles.link} to="/buy">
                Buy
              </NavLink>
              <img className={styles.arr} src={whiteArrow} alt="arrow" />
            </li>
            <li>
              <NavLink className={styles.link} to="/sell">
                Sell
              </NavLink>
              <img className={styles.arr} src={whiteArrow} alt="arrow" />
            </li>
            <li>
              <NavLink className={styles.link} to="/create-offer">
                Create an offer
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/wallet">
                Wallet{" "}
              </NavLink>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-example1"
                  variant="secondary"
                >
                  <span className={styles.link}>Gift Card </span>
                  <img className={styles.arr} src={whiteArrow} alt="arrow" />
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.menu} variant="light">
                  <Dropdown.Item className={styles.dropdownItem}>
                    <div
                      className={styles.currWrap}
                      onClick={() => {
                        dispatch(handleGiftCardModal({value: true, currencyType: 'bitcoin'}));
                      }}
                    >
                      <img src={bitcoin} alt="Currency" />
                      <div className={styles.nameWrap}>
                        <div className={styles.name}>Bitcoin</div>
                        <div className={styles.count_amount}>
                          <div className={styles.count}>Search for offers  to Sell gift cards with bitcoin</div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>
                    <div className={styles.currWrap}
                      onClick={() => {
                        dispatch(handleGiftCardModal({value: true, currencyType: 'USDT'}));
                      }}
                    >
                      <img src={tether} alt="Currency" />
                      <div className={styles.nameWrap}>
                        <div className={styles.name}>Tether</div>
                        <div className={styles.count_amount}>
                          <div className={styles.count}>Search for offers  to Sell gift cards with Tether</div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropdownItem}>
                    <div
                      className={styles.currWrap}
                      onClick={() => {
                        dispatch(handleGiftCardModal({value: true, currencyType: 'ethereum'}));
                      }}
                    >
                      <img src={ethereum} alt="Currency" />
                      <div className={styles.nameWrap}>
                        <div className={styles.name}>Ethereum</div>
                        <div className={styles.count_amount}>
                          <div className={styles.count}>
                            Search for offers to buy gift cards with Ethereum
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-example1"
                  variant="secondary"
                >
                  <span className={styles.link}>Dashboards</span>
                  <img className={styles.arr} src={whiteArrow} alt="arrow" />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="light">
                  <Dropdown.Item
                    onClick={() => navigate("/classic")}
                    className={styles.dropdownItem}
                  >
                    <div className={`${styles.nameWrap} ${styles.outer}`}>
                      <div className={styles.dropdownAlign}>
                        <img className={styles.icon} src={icon} alt="icon" />
                        <div>
                          <div className={styles.name}>Classic Dashboard</div>
                          <div className={styles.count_amount}>
                            <div className={styles.count}>Active Offers: 0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => navigate("/becomeVendor")}
                    className={styles.dropdownItem}
                  >
                    <div className={`${styles.nameWrap} ${styles.outer}`}>
                      <div className={styles.dropdownAlign}>
                        <img className={styles.icon} src={icon} alt="icon" />
                        <div>
                          <div className={styles.name}>Become a Vendor</div>
                          <div className={styles.count_amount}>
                            <div className={styles.count}>Become a Vendor</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => navigate("/affiliate")}
                    className={styles.dropdownItem}
                  >
                    <div className={`${styles.nameWrap} ${styles.outer}`}>
                      <div className={styles.dropdownAlign}>
                        <img className={styles.icon} src={icon} alt="icon" />
                        <div>
                          <div className={styles.name}>Affiliate Dashboard</div>
                          <div className={styles.count_amount}>
                            <div className={styles.count}>
                              Affiliate balance: 0 BTC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className={styles.notif_login}>
          <div className={styles.notif}>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-example1"
                variant="secondary"
              >
                <img src={bellIcon} alt="bellIcon" /> {unRead > 0 && <Badge bg="secondary">{unRead}</Badge>}
              </Dropdown.Toggle>
              <Dropdown.Menu variant="light">
                <div className={styles.notify_container}>
                  <div className={styles.tabs}>
                    <div
                      className={`${styles.tab} ${tab === "inbox" && styles.active
                        }`}
                      onClick={() => setTab("inbox")}
                    >
                      Inbox
                    </div>
                    <div
                      className={`${styles.tab} ${tab === "moderators" && styles.active
                        }`}
                      onClick={() => setTab("moderators")}
                    >
                      Moderators
                    </div>
                  </div>
                  <div className={styles.alignment}>
                    <span className={styles.subHeading}>Notifications</span>
                    <button type="button" className={styles.btnTxt} onClick={markAsReadHandler}>
                      Mark as read
                    </button>
                  </div>
                  {tab === "inbox" && (
                    <div>
                      {
                        notifications?.length > 0 && notifications?.slice(0, 5)?.map(el => (<div className={styles.notification} key={el?._id}>
                          <p className={styles.title}>{el?.type}</p>
                          <div className={styles.align}>
                            <Link to={`/${el?.link}`} className={styles.msgTxt}>
                              {el?.description}
                            </Link>
                          </div>
                          <span className={styles.time}>{moment(el?.createdAt).fromNow()}</span>
                        </div>))
                      }
                    </div>
                  )}
                  {tab === "moderators" && (
                    <div>
                      {pendinngTransaction?.length > 0 &&
                        pendinngTransaction?.map((offer, index) => (
                          <div
                            key={index}
                            className={styles.notification}
                            onClick={() => navigateTo(offer.transaction)}
                          >
                            <p className={styles.title}>
                              You have to{" "}
                              {offer?.transaction?.buyerId?._id ===
                                userInfo?.data?.user?._id
                                ? "pay"
                                : "release"}{" "}
                              trade {offer?.transaction?.transactionId} by{" "}
                              {offer?.transaction?.buyerId?._id ===
                                userInfo?.data?.user?._id
                                ? offer?.transaction?.sellerId?.name
                                : offer?.transaction?.buyerId?.name}
                            </p>
                            {/* <div className={styles.align}>
                              <img
                                className={styles.errorIcon}
                                src={errorIcon}
                                alt="icon"
                              />
                              <span className={styles.msgTxt}>
                                This dispute was awarded...
                              </span>
                            </div>*/}
                            <span className={styles.time}>
                              {dates.has(offer?.created)
                                ? null
                                : renderDate(offer?.created)}
                            </span>
                          </div>
                        ))}

                      {/* <div className={styles.notification}>
                        <p className={styles.title}>
                          Moderator message in trade rehehdgysjd
                        </p>
                        <div className={styles.align}>
                          <img
                            className={styles.errorIcon}
                            src={errorIcon}
                            alt="icon"
                          />
                          <span className={styles.msgTxt}>
                            This dispute was awarded...
                          </span>
                        </div>
                        <span className={styles.time}>3 min ago</span>
                      </div> */}
                    </div>
                  )}

                  <Link to="/notification" className={styles.viewBtn}>
                    View all Notifications
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.userName}>{data?.user?.name}</p>
          {showBtn ? (
            <div className={styles.login}>
              <NavLink className={styles.login_link} to="/">
                Login
              </NavLink>
            </div>
          ) : (
            <div className={styles.userTab}>
              <div className={styles.profileDropdown}>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-button-example1"
                    variant="secondary"
                  >
                    {pic ? (<img
                      className={styles.userProfile}
                      src={`data:image/jpeg;base64,${pic}`}
                      alt="profile"
                    />) : (<img
                      className={styles.userProfile}
                      src={profile}
                      alt="profile"
                    />)}

                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="light">
                    <Dropdown.Item
                      onClick={() => navigate("/settings")}
                      className={styles.dropdownItem}
                    >
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img src={userIcon} alt="icon" />
                        </div>
                        <div className={styles.widthLg}>
                          <span>My Profile</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.dropdownItem}>
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img
                            className={styles.dropDownicons}
                            src={paymentIcon}
                            alt="icon"
                          />
                        </div>
                        <div className={styles.widthLg}>
                          <span>Payment Method</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => navigate("/settings")}
                      className={styles.dropdownItem}
                    >
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img
                            className={styles.dropDownicons}
                            src={settingIcon}
                            alt="icon"
                          />
                        </div>
                        <div className={styles.widthLg}>
                          <span>Setting</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => navigate("/tradeHistory")}
                      className={styles.dropdownItem}
                    >
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img
                            className={styles.dropDownicons}
                            src={tradeHistory}
                            alt="icon"
                          />
                        </div>
                        <div className={styles.widthLg}>
                          <span>Trade History</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => navigate("/contact")}
                      className={styles.dropdownItem}
                    >
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img
                            className={styles.dropDownicons}
                            src={tradePartner}
                            alt="icon"
                          />
                        </div>
                        <div className={styles.widthLg}>
                          <span>Trade Partner</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.dropdownItem}>
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img
                            className={styles.dropDownicons}
                            src={invite}
                            alt="icon"
                          />
                        </div>
                        <div className={styles.widthLg} onClick={() => navigate("/affiliate")}>
                          <span>Invite a friend</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.dropdownItem}>
                      <div className={styles.iconOuter}>
                        <div className={styles.widthSm}>
                          <img
                            className={styles.dropDownicons}
                            src={join}
                            alt="icon"
                          />
                        </div>
                        <div className={styles.widthLg}>
                          <span> Join our community </span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.greyContainer}>
                      <div className={styles.bgGrey}>
                        <div
                          className={`${styles.spaceBetween} ${styles.mgBottom}`}
                        ></div>
                        <div className={styles.iconOuter}>
                          <div className={styles.widthSm}>
                            <img
                              className={styles.dropDownicons}
                              src={logout}
                              alt="icon"
                            />
                          </div>
                          <div className={styles.widthLg} onClick={userLogout}>
                            <span> Log out </span>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.greyContainer}>
                      <div className={styles.bgGrey}>
                        <div
                          className={`${styles.spaceBetween} ${styles.mgBottom}`}
                        >
                          <span>Buy/Sell</span>
                          <span>193098.1 PKR left</span>
                        </div>
                        <div className={styles.spaceBetween}>
                          <span>Send</span>
                          <span>193098.1 PKR left</span>
                        </div>
                      </div>{" "}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div
                className={`${styles.alignment} ${styles.currency}`}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <Dropdown show={show}>
                  <Dropdown.Toggle variant="secondary">
                    <span className={styles.amount}>0.00 PKR</span>
                    <img src={arrowDown} alt="icon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="light">
                    {location?.pathname === "/sell" ? (
                      <Dropdown.Item
                        className={styles.dropdownItem}
                        onClick={() => {
                          typeBuySelected("bitcoin");
                        }}
                      >
                        <div className={styles.currWrap}>
                          <img src={bitcoin} alt="Currency" />
                          <div className={styles.nameWrap}>
                            <div className={styles.name}>Bitcoin</div>
                            <div className={styles.count_amount}>
                              <div className={styles.count}>0BTC</div>
                              <div className={styles.amountt}>0PKR</div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item
                        className={styles.dropdownItem}
                        onClick={() => {
                          typeSellSelected("bitcoin");
                        }}
                      >
                        <div className={styles.currWrap}>
                          <img src={bitcoin} alt="Currency" />
                          <div className={styles.nameWrap}>
                            <div className={styles.name}>Bitcoin</div>
                            <div className={styles.count_amount}>
                              <div className={styles.count}>0BTC</div>
                              <div className={styles.amountt}>0PKR</div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    )}
                    {location?.pathname === "/sell" ? (
                      <Dropdown.Item
                        className={styles.dropdownItem}
                        onClick={() => {
                          typeBuySelected("USDT");
                        }}
                      >
                        <div className={styles.currWrap}>
                          <img src={tether} alt="Currency" />
                          <div className={styles.nameWrap}>
                            <div className={styles.name}>Tether</div>
                            <div className={styles.count_amount}>
                              <div className={styles.count}>0USDT</div>
                              <div className={styles.amountt}>0PKR</div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item
                        className={styles.dropdownItem}
                        onClick={() => {
                          typeSellSelected("USDT");
                        }}
                      >
                        <div className={styles.currWrap}>
                          <img src={tether} alt="Currency" />
                          <div className={styles.nameWrap}>
                            <div className={styles.name}>Tether</div>
                            <div className={styles.count_amount}>
                              <div className={styles.count}>0USDT</div>
                              <div className={styles.amountt}>0PKR</div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    )}
                    {location?.pathname === "/sell" ? (
                      <Dropdown.Item
                        className={styles.dropdownItem}
                        onClick={() => {
                          typeBuySelected("ethereum");
                        }}
                      >
                        <div className={styles.currWrap}>
                          <img src={ethereum} alt="Currency" />
                          <div className={styles.nameWrap}>
                            <div className={styles.name}>Ethereum</div>
                            <div className={styles.count_amount}>
                              <div className={styles.count}>0ETH</div>
                              <div className={styles.amountt}>0PKR</div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item
                        className={styles.dropdownItem}
                        onClick={() => {
                          typeSellSelected("ethereum");
                        }}
                      >
                        <div className={styles.currWrap}>
                          <img src={ethereum} alt="Currency" />
                          <div className={styles.nameWrap}>
                            <div className={styles.name}>Ethereum</div>
                            <div className={styles.count_amount}>
                              <div className={styles.count}>0ETH</div>
                              <div className={styles.amountt}>0PKR</div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          )}
        </div>
      </div>
      {showCom && <Bitcoin />}
    </div>
  );
};

export default Header;
