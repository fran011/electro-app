import styles from '../styles/Table.module.css';

const TableOptativasEnergiaElectrica = () => {
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
          <td>E1201</td>
          <td>Programación</td>
          <td>F1316, M0001</td>
        </tr>
        <tr>
          <td>E1246</td>
          <td>Tesina de grado-Ingeniería en Energía Electrica</td>
          <td>E1239, E1241</td>
        </tr>
        <tr>
          <td>E1401</td>
          <td>Técnicas de Alta Tensión</td>
          <td>E1242, M0001</td>
        </tr>
        <tr>
          <td>E1402</td>
          <td>Electrónica de Potencia en Sistemas Eléctricos</td>
          <td>E1232, M0001</td>
        </tr>
        <tr>
          <td>E1403</td>
          <td>Planificación y Gestión de la Energía</td>
          <td>E1238, M0001</td>
        </tr>
        <tr>
          <td>E1404</td>
          <td>Redes Inteligentes y Nuevas Tecnologías</td>
          <td>E1239, E1241, E1243</td>
        </tr>

        {/* Electiva Humanística */}
        <tr>
          <td></td>
          <td>Electiva Humanística</td>
          <td></td>
        </tr>
        <tr>
          <td>S0016</td>
          <td>Cuestión Malvinas- Políticas Soberanas</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0012</td>
          <td>Historia Social de la Tecnología y la Ingeniería</td>
          <td>5 Mat. Aprobadas</td>
        </tr>
        <tr>
          <td>S0017</td>
          <td>Educación, Ciencia, Tecnología e Industria</td>
          <td>5 Mat. Aprobadas</td>
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
          <td>S0013</td>
          <td>Empleabilidad y Gestión de la Carrera Profesional en Ingeniería</td>
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

export default TableOptativasEnergiaElectrica;
