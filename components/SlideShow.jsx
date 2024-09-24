import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/SlideShow.module.css';

const Slider = ({images}) => {

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
