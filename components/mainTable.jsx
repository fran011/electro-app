// MainTable.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/MainTable.module.css'; // Importa los estilos
import URLS from "../data/URLS.json"

const MainTable = () => {
    const tableData = [
        { column2: 'IITREE', url: URLS.iitree },
        { column2: 'LEICI', url: URLS.leici },
        { column2: 'LEME', url: URLS.leme },
        { column2: 'SENYT', url: URLS.senyt },
        { column2: 'GRIDCOMD', url: URLS.gridcomd },
        { column2: 'UNITEC', url: URLS.unitec },
        // Agrega más filas según sea necesario
    ];

    const tableData2 = [
        { column1: 'Ingeniería en Computación', link: '/ing_computacion' },
        { column1: 'Ingeniería en Telecomunicaciones', link: '/ing_telecomunicaciones' },
        { column1: 'Ingeniería en Energía Eléctrica', link: '/ing_energiaelectrica' },
        { column1: 'Ingeniería en Electrónica', link: '/ing_electronica' },
    ];

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.headerCell}>Carreras de Grado</div>
                <div className={styles.headerCell}>Unidades de Investigación</div>
            </div>
            <div className={styles.body}>
                <div className={styles.column}>
                    {tableData2.map((row, index) => (
                        <div key={index} className={styles.cell}>
                            <Link href={row.link} passHref>
                                <div className={styles.link}>{row.column1}</div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={styles.column}>
                    {tableData.map((row, index) => (
                        <div key={index} className={styles.cell}>
                            <a href={row.url} target="_blank" rel="noopener noreferrer">
                                {row.column2}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainTable;

