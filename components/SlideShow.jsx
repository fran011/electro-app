import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/SlideShow.module.css';

const Slider = () => {
    const images = [
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-13.19.40-1-e1699633761233.jpeg",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-13.19.44-1-e1699633487340.jpeg",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/01/ingreso_17_2_medium.jpg",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-13.19.40-e1699633792844.jpeg",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-13.19.42-1-e1699633656467.jpeg",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/imagen_carrusel_11.png",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-13.19.44-e1699633573922.jpeg",
        "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-13.19.42-e1699633695960.jpeg",
    ];

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
