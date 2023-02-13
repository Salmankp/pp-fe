import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import Modal from "react-bootstrap/Modal";
import ReactSelect from "../../Common/ReactSelect";
import crossIcon from "../../../../assets/images/crossIcon.svg";
import CameraIcon from "../../../../assets/images/Camera.svg";
import CloudUpload from "../../../../assets/images/upload.svg";
import IDCARD from "../../../../assets/images/idcard.svg";
import platform from 'platform';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../../actions/user-actions";
import { KYCVerification } from "../../../../actions/user-actions";
import axios from "axios";
import { countryNames } from "./countryData";
// import TakePhoto from "../../TakePhoto/TakePhoto";
import { Camera } from "react-camera-pro";

const setDocumentArray = data => {
  return data.map(data => ({
    label: data.split("_").join(" "),
    value: data
  }));
};
const KycModal = ({ openKycModal, setOpenKycModal }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.loggedInUser);
  const { token } = userInfo;
  const [msg, setMsg] = useState("");
  const [country, setCountry] = useState(countryNames[0].value);
  const [documentOption, setDocumentOption] = useState(
    setDocumentArray(countryNames[0].documentType)
  );
  const [documentType, setDocumentType] = useState(documentOption[0].value);
  const [frontPic, setFrontPic] = useState("");
  const [backPic, setBackPic] = useState("");
  const [selfiePic, setSelfiePic] = useState("");
  const [showCameraForFrontView, setShowCameraForFrontView] = useState(false);
  const [backView, setBackView] = useState(false);
  const [uploadFileForFrontView, setuploadFileForFrontView] = useState(false);
  const [clickNext, setClickNext] = useState(false);
  const [profileImage, setProfileImage] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [ip, setIP] = useState('');
  const [kCountry, setKCountry] = useState();
  const [city, setCity] = useState();
  const bName = platform.name;
  const id = userInfo?.data?.user?._id;
  const getIp = async () => {
    const res = await axios.get("https://ifconfig.co/ip")
    setIP(res.data);
  }
  const getCC = async () => {
    const res = await axios.get("http://ip-api.com/json")
    setCity(res.data.city);
    setKCountry(res.data.country);
  }
 
  useEffect( () => {
    getIp(),
    getCC()
  }, [])
  
  useEffect(() => {
    if (userInfo?.data?.user?.verified === true) setOpenKycModal(false);
  }, [userInfo]);
  useEffect(() => {
    console.log(countryNames);
    console.log(documentOption);
  }, [documentOption]);

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
  let option = {
    kycIp: ip,
    kycCountry: kCountry,
    kycCity: city,
    kycBrowser: bName,
    kycUserTime: Date.now()
  }
  const verifyKYC = async () => {
    setMsg("");
    if (
      country === "" ||
      documentType === "" ||
      selfiePic === "" ||
      frontPic === "" ||
      backPic === ""
    ) {
      setMsg("Please Submit All Data!");
      return;
    }
    const data = {
      country,
      id_type: documentType,
      selfieImage: selfiePic,
      frontIDImage: frontPic,
      backIdImage: backPic
    };
    let error = await dispatch(KYCVerification(data));
    if (error !== undefined) setMsg(`Error: ${error}`);
    dispatch(updateUser(option, id))
  };

  const TakePhoto = ({ setPic }) => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
      if (image !== null) setPic(image.slice(image.indexOf(",") + 1));
    }, [image]);
    return (
      <div style={{ height: "300px" }}>
        <Camera ref={camera} />
        <button
          className={styles.backBtn}
          onClick={() => {
            showCamera
              ? setShowCamera(false)
              : setShowCameraForFrontView(false);
          }}
        >
          Back
        </button>
        <button
          className={styles.takeBtn}
          onClick={() => setImage(camera.current.takePhoto())}
        >
          Take Photo
        </button>
        <div className={styles.takenImage}>
          <img src={image} />
        </div>
      </div>
    );
  };

  const UploadFrontView = ({ setPic, pic }) => {
    const [img, setImg] = useState();
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
      hiddenFileInput.current.click();
    };

    const onImageChange = async e => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
      let imageUrl = await convertToBase64(e.target.files[0]);
      // console.log(imageUrl, "hi");
      setPic(imageUrl);
    };

    return (
      <div className={styles.fileMain}>
        <button
          className={styles.uploadbackBtn}
          onClick={() => setuploadFileForFrontView(false)}
        >
          Back
        </button>
        <div className={styles.dummyImage}>
          {pic !== "" ? (
            <img
              className={styles.getImage}
              src={`data:image/jpeg;base64,${pic}`}
              alt=""
            />
          ) : (
            <img src={IDCARD} alt="crad-icon" className={styles.idCard} />
          )}
        </div>
        <div className={styles.chooseFile}>
          <div className={styles.inputFile} onClick={handleClick}>
            Choose File
          </div>
          <input
            style={{ display: "none" }}
            ref={hiddenFileInput}
            type="file"
            onChange={onImageChange}
          />
        </div>
      </div>
    );
  };

  const changeCountry = e => {
    let documents = countryNames;
    documents.find((post, index) => {
      if (post.label === e.label)
        setDocumentOption(setDocumentArray(countryNames[index].documentType));
    });
    setCountry(e.value);
  };
  const setDocument = e => {
    console.log(e);
    setDocumentType(e.value);
  };

  return (
    <Modal
      className={styles.modal}
      show={openKycModal}
      onHide={() => setOpenKycModal(false)}
      centered
    >
      <Modal.Body>
        <div className={styles.wrap}>
          <img
            className={styles.cross}
            src={crossIcon}
            onClick={() => setOpenKycModal(false)}
            alt="crossIcon"
          />
          {showCamera === true && profileImage ? (
            <TakePhoto setPic={setSelfiePic} />
          ) : profileImage === true ? (
            <>
              <button
                className={styles.backBtn2}
                onClick={() => setProfileImage(false)}
              >
                Back
              </button>
              <div className={` ${styles.heading} pt-4`}>
                Submit Your Selfie
              </div>
              <div
                className={styles.takeSelfie}
                onClick={() => setShowCamera(true)}
              >
                <div className={styles.icon}>
                  <img
                    src={CameraIcon}
                    alt="camera-icon"
                    className={styles.cameraIcon}
                  />
                </div>
                <div className={styles.photoText}>Selfie</div>
              </div>
              <div className={styles.nextBtn}>
                <span onClick={verifyKYC}>Submit</span>
              </div>
              <br></br>
              <br></br>
              <p>{msg}</p>
            </>
          ) : uploadFileForFrontView && backView === true ? (
            <UploadFrontView setPic={setBackPic} pic={backPic} />
          ) : showCameraForFrontView === true && backView ? (
            <TakePhoto setPic={setBackPic} pic={backPic} />
          ) : backView === true ? (
            <>
              <button
                className={styles.backBtn2}
                onClick={() => setBackView(false)}
              >
                Back
              </button>
              <div className={` ${styles.heading} pt-4`}>
                Submit ID Document Back View
              </div>
              <div className={styles.mainFlex}>
                <div
                  className={styles.takePhoto}
                  onClick={() => setShowCameraForFrontView(true)}
                >
                  <div className={styles.icon}>
                    <img
                      src={CameraIcon}
                      alt="camera-icon"
                      className={styles.cameraIcon}
                    />
                  </div>
                  <div className={styles.photoText}>Take Photo</div>
                </div>
                <div
                  className={styles.uploadFile}
                  onClick={() => setuploadFileForFrontView(true)}
                >
                  <div className={styles.icon}>
                    <img
                      src={CloudUpload}
                      alt="camera-icon"
                      className={styles.uploadIcon}
                    />
                  </div>
                  <div className={styles.uploadText}>Upload File</div>
                </div>
              </div>
              <div className={styles.nextBtn}>
                <span onClick={() => setProfileImage(true)}>Next</span>
              </div>
            </>
          ) : uploadFileForFrontView && clickNext ? (
            <UploadFrontView setPic={setFrontPic} pic={frontPic} />
          ) : showCameraForFrontView && clickNext ? (
            <TakePhoto setPic={setFrontPic} pic={frontPic} />
          ) : clickNext === true ? (
            <>
              <button
                className={styles.backBtn2}
                onClick={() => setClickNext(false)}
              >
                Back
              </button>
              <div className={` ${styles.heading} pt-4`}>
                Submit ID Document Front View
              </div>
              <div className={styles.mainFlex}>
                <div
                  className={styles.takePhoto}
                  onClick={() => setShowCameraForFrontView(true)}
                >
                  <div className={styles.icon}>
                    <img
                      src={CameraIcon}
                      alt="camera-icon"
                      className={styles.cameraIcon}
                    />
                  </div>
                  <div className={styles.photoText}>Take Photo</div>
                </div>
                <div
                  className={styles.uploadFile}
                  onClick={() => setuploadFileForFrontView(true)}
                >
                  <div className={styles.icon}>
                    <img
                      src={CloudUpload}
                      alt="camera-icon"
                      className={styles.uploadIcon}
                    />
                  </div>
                  <div className={styles.uploadText}>Upload File</div>
                </div>
              </div>
              <div className={styles.nextBtn}>
                <span onClick={() => setBackView(true)}>Next</span>
              </div>
            </>
          ) : (
            <>
              <div className={styles.heading}>KYC Veification</div>
              <div className={styles.flexWrap}>
                <div className={styles.countryFrom}>
                  <label className={styles.label}>
                    Country Your Photo ID From
                  </label>
                  <ReactSelect
                    placeholder="Click to select"
                    options={countryNames}
                    parentCallback={changeCountry}
                    value={countryNames[0]}
                  />
                </div>
                <div className={styles.docType}>
                  <label className={styles.label}>Document Type</label>
                  <ReactSelect
                    placeholder="Click to select"
                    options={documentOption}
                    parentCallback={setDocument}
                    value={documentOption[0]}
                  />
                </div>
              </div>
              <div className={styles.nextBtn}>
                <span onClick={() => setClickNext(true)}>Next</span>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default KycModal;
