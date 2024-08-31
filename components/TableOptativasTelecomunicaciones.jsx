import styles from '../styles/Table.module.css';

const TableOptativasTelecomunicaciones = () => {
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
          <td>OPTATIVAS</td>
          <td></td>
        </tr>
        <tr>
          <td>E1209</td>
          <td>Circuitos Electrónicos I</td>
          <td>E1206, E1216, E1231, M0001</td>
        </tr>
        <tr>
          <td>E1219</td>
          <td>Control Automático II</td>
          <td>E1216, M0001</td>
        </tr>
        <tr>
          <td>E1220</td>
          <td>Instrumentación y Control Industrial</td>
          <td>E1214, E1216, E1224, M0001</td>
        </tr>
        <tr>
          <td>E1225</td>
          <td>Taller de Sistemas Digitales</td>
          <td>E1213, M0001</td>
        </tr>
        <tr>
          <td>E1602</td>
          <td>Tesina de grado - Ingeniería en Telecomunicaciones</td>
          <td>E1213, E1217, E1221, E1222, E1223, M0001</td>
        </tr>
        <tr>
          <td>E1215</td>
          <td>Circuitos Electrónicos II</td>
          <td>E1209, M0001</td>
        </tr>
        <tr>
          <td>E1501</td>
          <td>Control Automático III</td>
          <td>E1219, M0001</td>
        </tr>
        <tr>
          <td>E1504</td>
          <td>Sistemas Embebidos</td>
          <td>E1225, M0001</td>
        </tr>
        <tr>
          <td>E1607</td>
          <td>Introducción a los Sistemas de Navegación Satelital</td>
          <td>E1222, E1605</td>
        </tr>
        <tr>
          <td>E1608</td>
          <td>Introducción a los Sistemas de Radar</td>
          <td>E1222, E1605</td>
        </tr>
        <tr>
          <td>E1609</td>
          <td>Codificación de Audio y Video</td>
          <td>E1603</td>
        </tr>

        {/* Electiva Humanística */}
        <tr>
          <td></td>
          <td>ELECTIVA HUMANÍSTICA</td>
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

export default TableOptativasTelecomunicaciones;
