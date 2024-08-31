import styles from '../styles/Table.module.css';

const TableComputacion = () => {
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
        <tr>
          <td>I1001</td>
          <td>Introducción a la Informática</td>
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
          <td>I1101</td>
          <td>Programación I</td>
          <td>I1001</td>
        </tr>
        <tr>
          <td>I1166</td>
          <td>Fundamentos de Arquitectura de Computadoras</td>
          <td>I1001</td>
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
          <td>I1102</td>
          <td>Programación II</td>
          <td>I1101</td>
        </tr>
        <tr>
          <td>F1303</td>
          <td>Física I</td>
          <td>F1301</td>
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
          <td>I1103</td>
          <td>Programación III</td>
          <td>I1102</td>
        </tr>
        <tr>
          <td>I1105</td>
          <td>Arquitectura de Computadoras</td>
          <td>I1166</td>
        </tr>
        <tr>
          <td>I1104</td>
          <td>Taller de Lenguajes I</td>
          <td>I1102</td>
        </tr>

        {/* 4º Semestre */}
        <tr>
          <td></td>
          <td>4º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>F1306</td>
          <td>Matemática D</td>
          <td>F1304</td>
        </tr>
        <tr>
          <td>F1305</td>
          <td>Física II</td>
          <td>F1302-F1303</td>
        </tr>
        <tr>
          <td>I1106</td>
          <td>Conceptos de Sistemas Operativos</td>
          <td>I1102-I1105</td>
        </tr>
        <tr>
          <td>I1107</td>
          <td>Taller de Lenguajes II</td>
          <td>I1104</td>
        </tr>

        {/* 5º Semestre */}
        <tr>
          <td></td>
          <td>5º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>F1315</td>
          <td>Probabilidades y Estadística</td>
          <td>F1302</td>
        </tr>
        <tr>
          <td>E1282</td>
          <td>Electrotecnia y Electrónica</td>
          <td>F1304-F1305</td>
        </tr>
        <tr>
          <td>I1108</td>
          <td>Conceptos de Bases de Datos</td>
          <td>I1102</td>
        </tr>
        <tr>
          <td>E1301</td>
          <td>Introducción al Diseño Lógico</td>
          <td>I1105</td>
        </tr>

        {/* 6º Semestre */}
        <tr>
          <td></td>
          <td>6º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>E1302</td>
          <td>Introducción al Procesamiento de Señales</td>
          <td>F1306</td>
        </tr>
        <tr>
          <td>I1109</td>
          <td>Taller de Arquitectura</td>
          <td>E1301</td>
        </tr>
        <tr>
          <td>I1110</td>
          <td>Ingeniería de Software</td>
          <td>I1102</td>
        </tr>
        <tr>
          <td>E1303</td>
          <td>Redes de Datos 1</td>
          <td>I1106</td>
        </tr>

        {/* 7º Semestre */}
        <tr>
          <td></td>
          <td>7º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>I1111</td>
          <td>Concurrencia y Paralelismo</td>
          <td>I1107-I1106</td>
        </tr>
        <tr>
          <td>E1304</td>
          <td>Instrumentación y Control</td>
          <td>E1282-E1302</td>
        </tr>
        <tr>
          <td>E1305</td>
          <td>Circuitos Digitales y Microcontroladores</td>
          <td>I1109</td>
        </tr>
        <tr>
          <td>I1113</td>
          <td>Economía y Emprendedorismo</td>
          <td>F1304</td>
        </tr>
        <tr>
          <td>AFC1</td>
          <td>Actividades de Formación Complementaria I</td>
          <td>10 asignaturas aprobadas</td>
        </tr>

        {/* 8º Semestre */}
        <tr>
          <td></td>
          <td>8º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>I1114</td>
          <td>Redes de Datos II</td>
          <td>E1303</td>
        </tr>
        <tr>
          <td>I1115</td>
          <td>Sistemas de Tiempo Real</td>
          <td>I1110-I1111</td>
        </tr>
        <tr>
          <td>E1306</td>
          <td>Taller de Proyecto I</td>
          <td>I1110-E1305</td>
        </tr>
        <tr>
          <td>I1112</td>
          <td>Bases de Datos</td>
          <td>I1108</td>
        </tr>
        <tr>
          <td>AFC2</td>
          <td>Actividades de Formación Complementaria II</td>
          <td>AFC1</td>
        </tr>

        {/* 9º Semestre */}
        <tr>
          <td></td>
          <td>9º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>I1116</td>
          <td>Sistemas Distribuidos y Paralelos</td>
          <td>I1111</td>
        </tr>
        <tr>
          <td>I1117</td>
          <td>Aspectos Legales de Ingeniería Informática</td>
          <td>I1113</td>
        </tr>
        <tr>
          <td>E1307</td>
          <td>Introducción a la Arquitectura de Computadoras Cuánticas</td>
          <td>E1306</td>
        </tr>
        <tr>
          <td>AFC3</td>
          <td>Actividades de Formación Complementaria III</td>
          <td>AFC2</td>
        </tr>

        {/* 10º Semestre */}
        <tr>
          <td></td>
          <td>10º Semestre</td>
          <td></td>
        </tr>
        <tr>
          <td>I1118</td>
          <td>Taller de Proyecto II</td>
          <td>I1110</td>
        </tr>
        <tr>
          <td></td>
          <td>Electiva Aspectos Humanísticos de la Profesión</td>
          <td>15 asignaturas aprobadas</td>
        </tr>
        <tr>
          <td>I1167</td>
          <td>Introducción a la Programación Cuántica</td>
          <td>I1105-I1110</td>
        </tr>
        <tr>
          <td>AFC4</td>
          <td>Actividades de Formación Complementaria IV</td>
          <td>AFC3</td>
        </tr>

        {/* Otros */}
        <tr>
          <td>EI100</td>
          <td>Práctica Profesional Supervisada</td>
          <td>(Debe tener 20 asignaturas aprobadas para realizar las PPS)</td>
        </tr>
        <tr>
          <td>INFIN</td>
          <td>Inglés (Prueba de Suficiencia)</td>
          <td>(Antes de iniciar las cursadas de 3er año.)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComputacion;
