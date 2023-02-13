import React from 'react'
import styles from './styles.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from '../../../../assets/images/client.png';
import quote from '../../../../assets/images/quote.svg';


const Feedback = () => {
    let settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    return (
        <div className='container'>
            <div className={styles.wrap}>
                <h1 className={styles.heading}>What people are saying about us</h1>
                <div className={styles.sliderOuter}>
                    <Slider {...settings}>
                        <div className={styles.feedbackOuter}>
                            <div className={styles.profileContainer}>
                                <img src={client} alt="profile" />
                                <h5 className={styles.name}>Sofia brichet</h5>
                                <span className={styles.description}>Vendor . USA</span>
                            </div>
                            <div>
                                <div className={styles.quoteImg}>
                                    <img src={quote} alt="icon" />
                                </div>
                                <p className={styles.txt}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas semper at integer et. At aliquam tortor lectus commodo ut lectus sed fermentum. Cursus in tincidunt cursus maecenas. Praesent feugiat dolor ipsum pharetra laoreet vulputate pellentesque sed.
                                </p>
                            </div>
                        </div>
                        <div className={styles.feedbackOuter}>
                            <div className={styles.profileContainer}>
                                <img src={client} alt="profile" />
                                <h5 className={styles.name}>Sofia brichet</h5>
                                <span className={styles.description}>Vendor . USA</span>
                            </div>
                            <div>
                                <div className={styles.quoteImg}>
                                    <img src={quote} alt="icon" />
                                </div>
                                <p className={styles.txt}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas semper at integer et. At aliquam tortor lectus commodo ut lectus sed fermentum. Cursus in tincidunt cursus maecenas. Praesent feugiat dolor ipsum pharetra laoreet vulputate pellentesque sed.
                                </p>
                            </div>
                        </div>
                        <div className={styles.feedbackOuter}>
                            <div className={styles.profileContainer}>
                                <img src={client} alt="profile" />
                                <h5 className={styles.name}>Sofia brichet</h5>
                                <span className={styles.description}>Vendor . USA</span>
                            </div>
                            <div>
                                <div className={styles.quoteImg}>
                                    <img src={quote} alt="icon" />
                                </div>
                                <p className={styles.txt}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas semper at integer et. At aliquam tortor lectus commodo ut lectus sed fermentum. Cursus in tincidunt cursus maecenas. Praesent feugiat dolor ipsum pharetra laoreet vulputate pellentesque sed.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
