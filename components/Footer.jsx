import React from "react";
import styles from '../styles/Footer.module.css';
import URLS from '../data/URLS.json'

const Footer = () => {
  const googleMap = URLS.google.google_map;
    return (
        <footer className={styles.footer}>
          <div className={styles.topContent}>   
            <div className={styles.contact}>
              <p> Datos de contactos</p>
              <p>Direccion: <a href={googleMap}>Calle 48 y 116, S/N, La Plata, Bs. As.</a></p>
              <p>Telefono: (+54-221) 423-6690 </p>
              <p>E-mail: depelec@ing.unlp.edu.ar</p>
            </div>
            <div className={styles.imageContainer}>
              <img src="/unlp.png" alt="Image 1" className={styles.footerImageBigger} />
              <img src="/Conicet.png" alt="Image 2" className={styles.footerImage} />
            </div>
          </div>
          <div className={styles.footerContent}>
            <p>&copy; 2024. Todos los derechos reservados.</p>
            <nav>
              <a href="#">Contacto</a>
              <a href="#">Privacidad</a>
              <a href="#">Términos de Servicio</a>
            </nav>
        </div>
        </footer>
    );
};

export default Footer;