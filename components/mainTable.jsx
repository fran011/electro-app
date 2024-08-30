// MainTable.js
import React from 'react';
import styles from '../styles/MainTable.module.css'; // Importa los estilos

const MainTable = () => {
    const tableData = [
        { column2: 'IITREE', url: 'https://www.iitree-unlp.org.ar/' },
        { column2: 'LEICI', url: 'https://leici.ing.unlp.edu.ar/'},
        { column2: 'LEME', url: 'https://leme.ing.unlp.edu.ar/' },
        { column2: 'SENYT', url: 'https://senyt.ing.unlp.edu.ar/' },
        { column2: 'GRIDCOMD', url: 'https://gridcomd.ing.unlp.edu.ar/' },
        { column2: 'UNITEC', url: 'https://labs.ing.unlp.edu.ar/electrotecnia/unitec/' },
        // Agrega más filas según sea necesario
    ];

    const tableData2 = [
        { column1: 'Ingenieria en Computación'},
        { column1: 'Ingenieria en Telecomunaciones'},
        { column1: 'Ingenieria en Energía Eléctrica'},
        { column1: 'Ingenieria en Electrónica'},
    ]

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.headerCell}>Carreras de Grado</div>
                <div className={styles.headerCell}>Unidades de Investigación</div>
            </div>
            <div className={styles.body}>
                <div className={styles.column}>
                    {tableData2.map((row, index) => (
                        <div key={index} className={row.column1 ? styles.cell : styles.emptyCell}>
                            {row.column1}
                        </div>
                    ))}
                </div>
                <div className={styles.column}>
                    {tableData.map((row, index) => (
                        <div key={index} className={row.column2 ? styles.cell : styles.emptyCell}>
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
