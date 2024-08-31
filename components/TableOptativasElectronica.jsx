import styles from '../styles/Table.module.css';

const TableOptativasElectronica = () => {
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
        {/* Optativas */}
        <tr>
          <td></td>
          <td>Optativas</td>
          <td></td>
        </tr>
        <tr>
          <td>E1222</td>
          <td>Propagación, Enlaces y Antenas</td>
          <td>E1214</td>
        </tr>
        <tr>
          <td>E1226</td>
          <td>Arquitectura Avanzada de Procesadores</td>
          <td>E1225</td>
        </tr>
        <tr>
          <td>E1502</td>
          <td>Tesina de Grado - Ingeniería Electrónica</td>
          <td>E1213, E1215, E1501</td>
        </tr>
        <tr>
          <td>E1503</td>
          <td>Introducción a la Microelectrónica</td>
          <td>E1225</td>
        </tr>
        <tr>
          <td>E1505</td>
          <td>Introducción a la Robótica</td>
          <td>E1501</td>
        </tr>
        <tr>
          <td>E1601</td>
          <td>Análisis de Señales Aleatorias</td>
          <td>E1206, E1214</td>
        </tr>
        <tr>
          <td>E1217</td>
          <td>Técnicas de Radio Frecuencia y Microondas</td>
          <td>E1206, E1208, E1214</td>
        </tr>
        <tr>
          <td>E1221</td>
          <td>Redes de Comunicaciones</td>
          <td>E1224, E1601</td>
        </tr>
        <tr>
          <td>E1223</td>
          <td>Comunicaciones Digitales</td>
          <td>E1601</td>
        </tr>
        <tr>
          <td>E1504</td>
          <td>Sistemas Embebidos</td>
          <td>E1225</td>
        </tr>
        <tr>
          <td>E1506</td>
          <td>Control de Sistemas Biológicos</td>
          <td>E1501</td>
        </tr>
        <tr>
          <td>E1507</td>
          <td>Control de Sistemas de Energías Renovables</td>
          <td>E1501</td>
        </tr>

        {/* Electiva Humanística */}
        <tr>
          <td></td>
          <td>Electiva Humanística</td>
          <td></td>
        </tr>
        <tr>
          <td>S0001</td>
          <td>Humanística A</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0002</td>
          <td>Humanística B</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0009</td>
          <td>Talleres de Herramientas Humanísticas</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0010</td>
          <td>Ingeniería, Comunicación y Educación</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0011</td>
          <td>Ingeniería Social</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0012</td>
          <td>Historia Social de la Tecnología y la Ingeniería</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0013</td>
          <td>Empleabilidad y Gestión de la Carrera Profesional en Ingeniería</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0016</td>
          <td>Cuestión Malvinas - Políticas Soberanas</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0017</td>
          <td>Educación, Ciencia, Tecnología e Industria</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0018</td>
          <td>Idioma Chino Básico</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableOptativasElectronica;
