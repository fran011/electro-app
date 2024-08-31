import styles from '../styles/Table.module.css';

const TableEnergiaElectrica = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>CÓDIGO</th>
          <th>ASIGNATURA</th>
          <th>CORRELATIVAS</th>
        </tr>
      </thead>
      <tbody>
        {/* Nivelación */}
        <tr>
          <td></td>
          <td>Nivelación</td>
          <td></td>
        </tr>
        <tr>
          <td>D1001</td>
          <td>Matemática para Ingeniería</td>
          <td></td>
        </tr>

        {/* 1º Semestre */}
        <tr>
          <td></td>
          <td>1º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1001</td>
          <td>Introducción a la Electrotecnia</td>
          <td></td>
        </tr>
        <tr>
          <td>F1301</td>
          <td>Matemática A</td>
          <td>D1001</td>
        </tr>
        <tr>
          <td>U1901</td>
          <td>Química para Ingeniería</td>
          <td></td>
        </tr>

        {/* 2º Semestre */}
        <tr>
          <td></td>
          <td>2º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>F1302</td>
          <td>Matemática B</td>
          <td>F1301</td>
        </tr>
        <tr>
          <td>F1303</td>
          <td>Física I</td>
          <td>F1301</td>
        </tr>
        <tr>
          <td>M1602</td>
          <td>Gráfica para Ingeniería</td>
          <td></td>
        </tr>

        {/* 3º Semestre */}
        <tr>
          <td></td>
          <td>3º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>F1304</td>
          <td>Matemática C</td>
          <td>F1302</td>
        </tr>
        <tr>
          <td>F1305</td>
          <td>Física II</td>
          <td>F1302, F1303</td>
        </tr>
        <tr>
          <td>F1315</td>
          <td>Probabilidades y Estadística</td>
          <td>F1302</td>
        </tr>
        <tr>
          <td></td>
          <td>Electiva Humanística</td>
          <td>5 materias aprobadas</td>
        </tr>

        {/* 4º Semestre */}
        <tr>
          <td></td>
          <td>4º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1204</td>
          <td>Análisis de Circuitos</td>
          <td>F1304, F1305</td>
        </tr>
        <tr>
          <td>F1306</td>
          <td>Matemática D</td>
          <td>F1304</td>
        </tr>
        <tr>
          <td>F1308</td>
          <td>Física III</td>
          <td>F1304, F1305, U1901</td>
        </tr>
        <tr>
          <td>F1316</td>
          <td>Introducción a la Programación y Análisis Numérico</td>
          <td>F1304</td>
        </tr>

        {/* 5º Semestre */}
        <tr>
          <td></td>
          <td>5º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>C1152</td>
          <td>Estructuras</td>
          <td>F1303</td>
        </tr>
        <tr>
          <td>E1202</td>
          <td>Electromagnetismo Aplicado</td>
          <td>E1204</td>
        </tr>
        <tr>
          <td>E1231</td>
          <td>Dispositivos Electrónicos</td>
          <td>E1204, F1308</td>
        </tr>
        <tr>
          <td>E1211</td>
          <td>Análisis de Sistemas y Señales</td>
          <td>E1204, F1306</td>
        </tr>

        {/* 6º Semestre */}
        <tr>
          <td></td>
          <td>6º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1206</td>
          <td>Circuitos y Sistemas Lineales</td>
          <td>E1211</td>
        </tr>
        <tr>
          <td>E1207</td>
          <td>Materiales Eléctricos</td>
          <td>U1901</td>
        </tr>
        <tr>
          <td>E1208</td>
          <td>Medidas Eléctricas</td>
          <td>E1211, F1315</td>
        </tr>
        <tr>
          <td>E1237</td>
          <td>Control Automático</td>
          <td>E1211</td>
        </tr>

        {/* 7º Semestre */}
        <tr>
          <td></td>
          <td>7º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1232</td>
          <td>Conversión Electrónica de Potencia</td>
          <td>E1231, E1237</td>
        </tr>
        <tr>
          <td>E1233</td>
          <td>Máquinas Eléctricas I</td>
          <td>E1202, E1208</td>
        </tr>
        <tr>
          <td>E1241</td>
          <td>Técnicas de Medición y Comunicación en Sistemas Eléctricos</td>
          <td>E1206</td>
        </tr>
        <tr>
          <td>M1673</td>
          <td>Termodinámica y Recursos Energéticos</td>
          <td>F1303, U1901</td>
        </tr>
        <tr>
          <td>AFC 1</td>
          <td>Actividades de Formación Complementaria I</td>
          <td>15 Mat. Aprobadas</td>
        </tr>

        {/* 8º Semestre */}
        <tr>
          <td></td>
          <td>8º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1234</td>
          <td>Máquinas Eléctricas II</td>
          <td>E1233</td>
        </tr>
        <tr>
          <td>E1235</td>
          <td>Teoría de la Transmisión de la Energía Eléctrica</td>
          <td>E1204, E1233</td>
        </tr>
        <tr>
          <td>E1236</td>
          <td>Dispositivos e Instalaciones Eléctricas I</td>
          <td>E1207, E1233</td>
        </tr>
        <tr>
          <td>P1752</td>
          <td>Economía Para Ingenieros y Organización Industrial</td>
          <td>15 materias aprobadas</td>
        </tr>
        <tr>
          <td>P1759</td>
          <td>Ingeniería Legal y Ejercicio Profesional</td>
          <td>15 materias aprobadas</td>
        </tr>
        <tr>
          <td>AFC 2</td>
          <td>Actividades de Formación Complementaria II</td>
          <td>AFC 1</td>
        </tr>

        {/* 9º Semestre */}
        <tr>
          <td></td>
          <td>9º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1238</td>
          <td>Generación de Energía Eléctrica</td>
          <td>E1234, E1236, M0001, M1673</td>
        </tr>
        <tr>
          <td>E1239</td>
          <td>Sistemas de Potencia</td>
          <td>E1234, E1235, E1237, M0001</td>
        </tr>
        <tr>
          <td>E1240</td>
          <td>Dispositivos e Instalaciones Eléctricas II</td>
          <td>E1236</td>
        </tr>
        <tr>
          <td>E1260</td>
          <td>Planeamiento Energético</td>
          <td>E1235, E1237, P1752</td>
        </tr>
        <tr>
          <td>TES</td>
          <td>Trabajo Final de Ingeniería</td>
          <td>33 materias aprobadas</td>
        </tr>
        <tr>
          <td>PAS</td>
          <td>Pasantía</td>
          <td>20 materias aprobadas</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableEnergiaElectrica;
