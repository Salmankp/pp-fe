import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Table } from "react-bootstrap";
import ReactSelect from "../../Common/ReactSelect";
import AddressModal from "./AddressModal";
import bitcoin from "../../../../assets/images/bitcoin.svg";
import tether from "../../../../assets/images/tether.svg";
import ethereum from "../../../../assets/images/ethereum.svg";
import vector from "../../../../assets/images/vector.png";
import { useSelector } from "react-redux";

const options = [
  {
    value: "BTC",
    label: (
      <div>
        <img className={styles.icon} src={bitcoin} />
        <span className={styles.selectTxt}>Bitcoin </span>
      </div>
    ),
  },
  {
    value: "USD",
    label: (
      <div>
        <img className={styles.icon} src={tether} />
        <span className={styles.selectTxt}>Tether </span>{" "}
      </div>
    ),
  },
  {
    value: "ETH",
    label: (
      <div>
        <img className={styles.icon} src={ethereum} />
        <span className={styles.selectTxt}>Ethereum </span>{" "}
      </div>
    ),
  },
];

const Addresses = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("ETH");
  const walletAddress = useSelector(
    (state) => state?.walletSingleUser?.walletUserpayload?.data?.doc[0]
  );
  console.log(walletAddress, "wallet address");

  const callback = (childData) => {
    setType(childData.value);
  };

  return (
    <div className={styles.wrap}>
      <AddressModal showModal={showModal} setShowModal={setShowModal} />
      <div className={styles.outer}>
        <ReactSelect
          backgroundColor="white"
          options={options}
          value={type}
          parentCallback={callback}
          placeholder="Select Type"
        />
      </div>
      <p className={styles.title}>Your Bitcoin crypto Addresses</p>
      <div className={styles.tableList}>
        <Table responsive className={styles.table}>
          <thead>
            <tr>
              <th className={styles.title}>Address</th>
              <th className={styles.title}>Network</th>
              <th className={styles.title}>Created</th>
              <th className={styles.title}>Recieved to address </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.data} onClick={() => setShowModal(true)}>
              <td>
                <div className={styles.alignment}>
                  <img src={ethereum} alt="bitcoin" />
                  <span className={styles.txt}>
                    {walletAddress?.wallet?.public}
                  </span>
                  <button>
                    <img src={vector} alt="icon" />
                  </button>
                </div>
              </td>
              <td>
                <span className={styles.txt}>
                  {" "}
                  {walletAddress?.wallet?.currency}
                </span>
              </td>
              <td>
                <span className={styles.txt}>
                  {walletAddress?.wallet?.create_date}
                </span>
              </td>
              <td>
                <span className={styles.txt}>
                  {walletAddress?.wallet?.received}
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Addresses;
