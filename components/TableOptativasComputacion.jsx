import styles from '../styles/Table.module.css';

const TableOptativasComputacion = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ASIGNATURA</th>
          <th>SEMESTRE</th>
          <th>CORRELATIVAS</th>
        </tr>
      </thead>
      <tbody>
        {/* Optativas 2023 – Tipo A */}
        <tr>
          <td></td>
          <td>Optativas 2023 – Tipo A</td>
          <td></td>
        </tr>
        <tr>
          <td>Minería de Datos Usando Sistemas Inteligentes</td>
          <td>Primero</td>
          <td>
            Plan 2011: Programación 3, Estadística<br />
            Plan 2008: Programación 3, Introducción al Procesamiento de Señales
          </td>
        </tr>
        <tr>
          <td>Desarrollo Seguro de Aplicaciones</td>
          <td>Primero</td>
          <td>Ingeniería de Software, Redes de Datos 2</td>
        </tr>
        <tr>
          <td>Java y Aplicaciones Avanzadas sobre Internet</td>
          <td>Primero</td>
          <td>Taller de Lenguajes 2, Ingeniería de Software</td>
        </tr>
        <tr>
          <td>Diseño De Experiencia de Usuario</td>
          <td>Primero</td>
          <td>Ingeniería de Software</td>
        </tr>
        <tr>
          <td>Taller de Lenguaje PHP</td>
          <td>Primero</td>
          <td>Taller de Lenguajes 2, Programación 3</td>
        </tr>
        <tr>
          <td>Taller de Lenguaje .NET</td>
          <td>Primero</td>
          <td>Taller de Lenguajes 2, Programación 3</td>
        </tr>
        <tr>
          <td>Internet de las Cosas</td>
          <td>Primero</td>
          <td>Taller de Lenguajes 2, Redes de Datos 2</td>
        </tr>
        <tr>
          <td>Procesamiento de Imágenes Digitales</td>
          <td>Primero</td>
          <td>Introducción al procesamiento de señales</td>
        </tr>
        <tr>
          <td>Cloud Computing y Cloud Robotics</td>
          <td>Segundo</td>
          <td>Concurrencia y Paralelismo, Conceptos de Bases de Datos</td>
        </tr>
        <tr>
          <td>Conceptos y Aplicaciones de Big Data</td>
          <td>Segundo</td>
          <td>Concurrencia y Paralelismo, Conceptos de Bases de Datos</td>
        </tr>
        <tr>
          <td>Calidad en Sistemas de Software</td>
          <td>Segundo</td>
          <td>Ingeniería de Software, Economía y Emprendedorismo</td>
        </tr>
        <tr>
          <td>Introducción a la Computación Móvil</td>
          <td>Segundo</td>
          <td>Ingeniería de Software, Redes de Datos 2</td>
        </tr>
        <tr>
          <td>Taller de programación sobre GPU</td>
          <td>Segundo</td>
          <td>Concurrencia y Paralelismo</td>
        </tr>
        <tr>
          <td>Aprendizaje Automático Profundo (Deep Learning)</td>
          <td>Segundo</td>
          <td>Programación 3, Estadística</td>
        </tr>
        <tr>
          <td>Programación Distribuida y Tiempo Real</td>
          <td>Segundo</td>
          <td>Concurrencia y Paralelismo</td>
        </tr>
        <tr>
          <td>Computabilidad y Complejidad</td>
          <td>Segundo</td>
          <td>Matemática D1, Programación 3</td>
        </tr>
        <tr>
          <td>Ingeniería de Aplicaciones Web</td>
          <td>Segundo</td>
          <td>Taller de Lenguajes 2, Ingeniería de Software</td>
        </tr>

        {/* Optativas 2023 – Tipo B */}
        <tr>
          <td></td>
          <td>Optativas 2023 – Tipo B</td>
          <td></td>
        </tr>
        <tr>
          <td>Electrónica II (E0310)</td>
          <td>Primero</td>
          <td>Electrotecnia y Electrónica (E0282)</td>
        </tr>
        <tr>
          <td>Teoría de la Información y Codificación (E1603)</td>
          <td>Primero</td>
          <td>Introducción al Procesamiento de Señales (E0302), Redes de Datos 1 (E0303)</td>
        </tr>
        <tr>
          <td>Comunicaciones (E0311)</td>
          <td>Segundo</td>
          <td>Introducción al Procesamiento de Señales (E0302)</td>
        </tr>
        <tr>
          <td>Dispositivos Electrónicos (E0318)</td>
          <td>Segundo</td>
          <td>Electrotecnia y Electrónica (E0282)</td>
        </tr>
        <tr>
          <td>Arquitecturas Avanzadas de Procesadores (E0309)</td>
          <td>Segundo</td>
          <td>Introducción al diseño lógico (E0301), Circuitos digitales y microcontroladores (E0305)</td>
        </tr>
        <tr>
          <td>Introducción a la Robótica (E1505)</td>
          <td>Segundo</td>
          <td>Instrumentación y Control (E0304), Programación III (I103)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableOptativasComputacion;
