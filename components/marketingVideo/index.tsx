import React from 'react';
import styles from "./marketingVideo.module.scss"

const MarketingVideo = () => {
    const handleScrollDown = () => {
        if(typeof window !== "undefined"){
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
        } else{
            console.log("Nothing")
        }
    };
    return (
        <div className={styles.videoWrapper}>
            <video autoPlay muted loop className={styles.fullscreenVideo}>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.scrollDownBtn} onClick={handleScrollDown}>
                <span>&#8595;</span>
                <p className={styles.scrollDownBtnText}>SCROLL</p>
            </div>
        </div>
    );
};

export default MarketingVideo;