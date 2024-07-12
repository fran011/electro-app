// MainTable.js
import React from 'react';
import styles from '../styles/MainTable.module.css'; // Importa los estilos

const MainTable = () => {
    const tableData = [
        { column2: 'IITREE' },
        { column2: 'LEICI' },
        { column2: 'LEME' },
        { column2: 'SENYT' },
        { column2: 'GRIDCOMD' },
        { column2: 'UNITEC' },
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
                            {row.column2}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainTable;
