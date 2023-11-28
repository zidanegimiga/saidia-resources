import React from 'react';
import styles from "./marketingVideo.module.scss"

const MarketingVideo = () => {
    return (
        <video autoPlay muted loop className={styles.fullscreenVideo}>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default MarketingVideo;