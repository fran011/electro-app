import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/SlideShow.module.css';
import URLS from "../data/URLS.json"

const Slider = () => {
    const images = URLS.images.SlideShows
    return (
        <div className={styles.slideContainer}>
            <Slide>
                {images.map((image, index) => (
                    <div key={index} className={styles.eachSlideEffect}>
                        <div
                            className={styles.backgroundImage}
                            style={{ backgroundImage: `url(${image})` }}
                        >
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slider;
