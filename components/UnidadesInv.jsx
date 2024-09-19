import React from "react";
import styles from "../styles/UnidadesInv.module.css";
import URLS from "../data/URLS.json"

const UnidadesInv = () => {
    return( 
        <div className={styles.divContainer}> 
            <div className={styles.divInstitutos}>
                <h3 className={styles.title}>INSTITUTOS </h3>
                <div className={styles.divContent}>
                    <a className={styles.content} href ={URLS.redirect.iitree} target="_blank"> <p>IITREE - Instituto de Investigaciones Tecnológicas para Redes y Equipos Eléctricos</p></a>
                    <a className={styles.content} href ={URLS.redirect.leici} target="_blank"> <p>LEICI - Laboratorio de Electrónica Industrial, Control e Instrumentación</p></a>
                </div>
            <div className={styles.divInstitutos}>
                <h3 className={styles.title}>GRUPOS UIDET </h3>
                <div className={styles.divContent}>
                    <a className={styles.content} href ={URLS.redirect.leme} target="_blank"> <p>LEME - Laboratorio de Ensayos y Mediciones Eléctricas</p></a>
                    <a className={styles.content} href ={URLS.redirect.senyt} target="_blank"> <p>SENyT - Sistemas Electrónicos de navegación y comunicaciones </p></a>
                    <a className={styles.content} href ={URLS.redirect.gridcomd} target="_blank"> <p>GrIDComD - Grupo de Investigación y Desarrollo en Comunicaciones Digitales </p></a>
                    <a className={styles.content} href ={URLS.redirect.unitec} target="_blank"> <p> UNITEC - Unidad de Investigación y Desarrollo para la calidad de la Educación en Ingeniería con orientación al uso de TIC </p></a>

                </div>
            </div>
            </div>
        </div>
    );
};

export default UnidadesInv;