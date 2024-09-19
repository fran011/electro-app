// SeccionCarreras.js
import React from "react";
import Link from "next/link";
import styles from "../styles/SeccionCarreras.module.css";
import URLS from "../data/URLS.json"

const SeccionCarreras = () => {
    const images = [
        { src: URLS.images.computacion, text: "Ingeniería en Computación", link: "/ing_computacion" },
        { src: URLS.images.electronica, text: "Ingeniería Electrónica", link: "/ing_electronica" },
        { src: URLS.images.telecomunicaciones, text: "Ingeniería en Telecomunicaciones", link: "/ing_telecomunicaciones" },
        { src: URLS.images.electricista, text: "Ingeniería en Energía Eléctrica", link: "/ing_energiaelectrica" },
    ];

    return (
        <div>
            <h2 className={styles.title}>Carreras de Grado</h2>
            <div className={styles.seccionContainer}>
                {images.map((image, index) => (
                    <Link key={index} href={image.link} passHref>
                        <div className={styles.item}>
                            <img src={image.src} alt={image.text} className={styles.image} />
                            <h4 className={styles.text}>{image.text}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SeccionCarreras;
