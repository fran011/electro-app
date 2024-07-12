import React from "react";
import styles from "../styles/SeccionCarreras.module.css";

const SeccionCarreras = () => {
    const images = [
        {src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/11/Link-a-Computacion.png", text: "Ingenieria en Computacion"},
        {src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/04/Link-a-Electronica.png", text: "Ingenieria Electronica"},
        {src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/ingeniero-de-telecomunicaciones (1).jpg", text: "Ingenieria en Telecomunicaciones"},
        {src: "https://electro.ing.unlp.edu.ar/wp-content/uploads/2017/04/Link-a-Electricista.png", text: "Ingenieria en Energia Electrica"},
    ]

    return (
        <div >  
            <h2 className={styles.title}>Carreras de Grado</h2>
            <div className={styles.seccionContainer}>
                {images.map((image, index) => (
                    <div key={index} className={styles.item}>
                        <img src={image.src} alt={`image${index+1}`}/>
                        <h4 className={styles.item}> {image.text} </h4>

                    </div>
                ))} 
            </div>
        </div>
    );
};

export default SeccionCarreras;
