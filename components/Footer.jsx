import React from "react";
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const googleMap = "https://www.google.com/maps/place/C.+116+%26+C.+48,+La+Plata,+Provincia+de+Buenos+Aires/@-34.906518,-57.9429327,17z/data=!3m1!4b1!4m6!3m5!1s0x95a2e640991092db:0xafc4f7db684c19eb!8m2!3d-34.906518!4d-57.9429327!16s%2Fg%2F11gdtk97sj?entry=ttu";
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