import styles from '../styles/Table.module.css';

const TableTelecomunicaciones = () => {
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
          <td>F1301</td>
          <td>Matemática A</td>
          <td>D1001</td>
        </tr>
        <tr>
          <td>U1901</td>
          <td>Química para Ingeniería</td>
          <td></td>
        </tr>
        <tr>
          <td>E1001</td>
          <td>Introducción a la Electrotecnia</td>
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
          <td>F1315</td>
          <td>Probabilidades y Estadística</td>
          <td>F1302</td>
        </tr>
        <tr>
          <td>F1305</td>
          <td>Física II</td>
          <td>F1302, F1303</td>
        </tr>
        <tr>
          <td></td>
          <td>Electiva Humanística</td>
          <td>5 Mat. Aprob.</td>
        </tr>

        {/* 4º Semestre */}
        <tr>
          <td></td>
          <td>4º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>F1316</td>
          <td>Introducción a la Programación y Análisis Numérico</td>
          <td>F1304</td>
        </tr>
        <tr>
          <td>F1306</td>
          <td>Matemática D</td>
          <td>F1304</td>
        </tr>
        <tr>
          <td>E1204</td>
          <td>Análisis de Circuitos</td>
          <td>F1304, F1305</td>
        </tr>
        <tr>
          <td>F1308</td>
          <td>Física III</td>
          <td>F1304, F1305, U1901</td>
        </tr>

        {/* 5º Semestre */}
        <tr>
          <td></td>
          <td>5º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1201</td>
          <td>Programación</td>
          <td>F1316</td>
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
          <td>E1212</td>
          <td>Técnicas Digitales</td>
          <td>E1201, E1231</td>
        </tr>
        <tr>
          <td>E1214</td>
          <td>Fundamentos de las Comunicaciones</td>
          <td>E1202, E1211, F1315</td>
        </tr>
        <tr>
          <td>E1216</td>
          <td>Control Automático I</td>
          <td>E1211</td>
        </tr>

        {/* 7º Semestre */}
        <tr>
          <td></td>
          <td>7º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1208</td>
          <td>Medidas Eléctricas</td>
          <td>E1211, F1315</td>
        </tr>
        <tr>
          <td>E1213</td>
          <td>Arquitectura de Computadores</td>
          <td>E1201, E1212</td>
        </tr>
        <tr>
          <td>E1222</td>
          <td>Propagación, Enlaces y Antenas</td>
          <td>E1214</td>
        </tr>
        <tr>
          <td>E1601</td>
          <td>Análisis de Señales Aleatorias</td>
          <td>E1206, E1214</td>
        </tr>
        <tr>
          <td>AFC 1</td>
          <td>Actividades de Formación Complementaria I</td>
          <td>10 MATERIAS APROBADAS</td>
        </tr>

        {/* 8º Semestre */}
        <tr>
          <td></td>
          <td>8º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1217</td>
          <td>Técnicas de Radio Frecuencia y Microondas</td>
          <td>E1206, E1208, E1214</td>
        </tr>
        <tr>
          <td>E1221</td>
          <td>Redes de Comunicaciones</td>
          <td>E1601</td>
        </tr>
        <tr>
          <td>E1223</td>
          <td>Comunicaciones Digitales</td>
          <td>E1601</td>
        </tr>
        <tr>
          <td>E1224</td>
          <td>Sistemas Operativos y Redes</td>
          <td>E1213</td>
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
          <td>E1603</td>
          <td>Teoría de la Información y Codificación</td>
          <td>E1223, M0001</td>
        </tr>
        <tr>
          <td>E1604</td>
          <td>Taller de Telecomunicaciones</td>
          <td>E1217, E1222, E1223, M0001</td>
        </tr>
        <tr>
          <td>E1605</td>
          <td>Comunicaciones Móviles y Satelitales</td>
          <td>E1221, E1222, E1223, M0001</td>
        </tr>
        <tr>
          <td>AFC 3</td>
          <td>Actividades de Formación Complementaria III</td>
          <td>AFC 2</td>
        </tr>

        {/* 10º Semestre */}
        <tr>
          <td></td>
          <td>10º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1228</td>
          <td>Práctica Profesional Supervisada (Electrónica)</td>
          <td>30 materias aprobadas, M0001</td>
        </tr>
        <tr>
          <td>E1606</td>
          <td>Proyecto Integrador de Telecomunicaciones</td>
          <td>E1213, E1221, E1604, M1602</td>
        </tr>
        <tr>
          <td>P1752</td>
          <td>Economía Para Ingenieros y Organización Industrial</td>
          <td>15 Mat. Aprobadas, M0001</td>
        </tr>
        <tr>
          <td>P1759</td>
          <td>Ingeniería Legal y Ejercicio Profesional</td>
          <td>15 Mat. Aprobadas, M0001</td>
        </tr>
        <tr>
          <td>AFC 4</td>
          <td>Actividades de Formación Complementaria IV</td>
          <td>AFC 3</td>
        </tr>
        <tr>
          <td></td>
          <td>Optativa</td>
          <td></td>
        </tr>

        {/* Idioma */}
        <tr>
          <td>M0001</td>
          <td>Inglés</td>
          <td>D1001</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTelecomunicaciones;
