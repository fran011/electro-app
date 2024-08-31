// SeccionCarreras.js
import React from "react";
import Link from "next/link";
import styles from "../styles/SeccionCarreras.module.css";

const SeccionCarreras = () => {
    const images = [
        { src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/11/Link-a-Computacion.png", text: "Ingeniería en Computación", link: "/ing_computacion" },
        { src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/04/Link-a-Electronica.png", text: "Ingeniería Electrónica", link: "/ing_electronica" },
        { src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/ingeniero-de-telecomunicaciones (1).jpg", text: "Ingeniería en Telecomunicaciones", link: "/ing_telecomunicaciones" },
        { src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/04/Link-a-Electricista.png", text: "Ingeniería en Energía Eléctrica", link: "/ing_energiaelectrica" },
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
