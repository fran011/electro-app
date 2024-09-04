import Head from "next/head";
import Navbar from "../components/NavBar";
import headerStyle from "../styles/Header.module.css";
import Footer from "../components/Footer";
import SeccionCarreras from "../components/SeccionCarreras";

import carrerasStyle from "../styles/Carreras.module.css"; 
import Accordion from "../components/Accordion";
import TableTelecomunicaciones from "../components/TableTelecomunicaciones";
import TableOptativasTelecomunicaciones from "../components/TableOptativasTelecomunicaciones";


export default function IngenieriaTelecomunicaciones() {
  return (
    <div>
      <Head>
        <title>Ingeniería en Telecomunicaciones - UNLP</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>

      <img src="/banner-hd.png" className={headerStyle.header} alt="Banner de Ingeniería en Telecomunicaciones" />
      <Navbar />

      <main className={carrerasStyle.mainContent}>
        <div className={carrerasStyle.divContainer}>
          <h1 className={carrerasStyle.title}>Ingeniería en Telecomunicaciones</h1>
        </div>
        <p className={carrerasStyle.paragraph}>
          Encontrá acá información sobre la carrera, alcances del título, plan de estudios y las optativas.
        </p>
        <Accordion title="Descripción">
          <p className={carrerasStyle.paragraph}>
            Durante su formación de grado, la totalidad de las actividades académicas que se desarrollan son tendientes a cumplir con los objetivos generales y específcos de la carrera, y graduar al alumno en la disciplina, con condiciones para:<br /><br />
            Desarrollarse individual o colectivamente en la disciplina, en el marco del alcance del título y de su competencia profesional.<br /><br />
            Integrarse en un grupo multidisciplinario de Investigación y Desarrollo Tecnológico.<br /><br />
            Integrarse en un equipo de proyecto, con capacidad para participar en la planifcación, proyecto, dirección, construcción, operación, inspección y mantenimiento.<br /><br />
            Afrontar satisfactoriamente estudios de postgrado (especializaciones, perfeccionamiento, actualizaciones, maestrías, doctorados).<br /><br />
            Transmitir los conocimientos adquiridos.<br /><br />
            Comprometerse con el sentido social de su función.<br /><br />
            Adaptarse rápidamente a los cambios tecnológicos.<br /><br />
            Promover cambios tecnológicos y operativos.<br /><br />
            Adaptarse y utilizar herramientas informáticas.<br /><br />
            Analizar e interpretar los resultados obtenidos con herramientas informáticas.<br /><br />
            </p >
        </Accordion>

        <Accordion title="Alcance del título">
          <p className={carrerasStyle.paragraph}>
            1.- Planificación, dirección, construcción, instalación, puesta en marcha, operación, ensayos, mediciones, mantenimiento, reparación, modificación, transformación e inspección. Estudios de factibilidad, control de calidad y certificación. Estudios de factibilidad y evaluación de proyectos de inversión. Diseños de marcos regulatorios. En todo relativo a:<br /><br />
            a) Servicios de Telecomunicación.<br /><br />
            b) Servicios de Radiocomunicaciones.<br /><br />
            c) Sistemas de Telecomunicaciones para Procesos y Automatización Industrial.<br /><br />
            d) Servicios Telemáticos.<br /><br />
            f) Sistemas de Sonido e Imagen.<br /><br />
            e) Sistemas de recepción y transmisión, procesamiento y utilización de señales de comunicación en todas las frecuencias y potencias, audio, video, datos y otros tipos de señales.<br /><br />
            g) Radiodeterminación<br /><br />
            h) Sistemas de ayuda a la navegación aérea, terrestre y marítima.<br /><br />
            <br /><br />
            2.- Estudios, tareas y asesoramientos relacionados con:<br /><br />
            a) Asuntos de Ingeniería Legal, Económica y Financiera relacionados con los incisos anteriores.<br /><br />
            b) Arbitrajes, auditorías, pericias y tasaciones relacionados con los incisos anteriores.<br /><br />
            e) Higiene, Seguridad Industrial y contaminación Ambiental relacionados con los incisos anteriores<br /><br />
            </p>
        </Accordion>

        <Accordion title="Plan de estudios">
         <TableTelecomunicaciones />
        </Accordion>

        <Accordion title="Optativas 2023">
         <TableOptativasTelecomunicaciones />
        </Accordion>
       
        
      </main>
      <SeccionCarreras />
      <Footer />
    </div>
  );
}
