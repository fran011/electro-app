import Head from "next/head";
import Navbar from "../components/NavBar";
import headerStyle from "../styles/Header.module.css";
import Footer from "../components/Footer";
import SeccionCarreras from "../components/SeccionCarreras";


import carrerasStyle from "../styles/Carreras.module.css"; 
import Accordion from "../components/Accordion";
import TableComputacion from "../components/TableComputacion";
import TableOptativasComputacion from "../components/TableOptativasComputacion";


export default function IngenieriaComputacion() {
  return (
    <div>
      <Head>
        <title>Ingeniería en Computación - UNLP</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>

      <img src="/banner-hd.png" className={headerStyle.header} alt="Banner de Ingeniería en Computación" />
      <Navbar />

      <main className={carrerasStyle.mainContent}>
        <div className={carrerasStyle.divContainer}>
          <h1 className={carrerasStyle.title}>Ingeniería en Computación</h1>
        </div>
        <p className={carrerasStyle.paragraph}>
          Encontrá acá información sobre la carrera, alcances del título, plan de estudios y las optativas.
        </p>

        <Accordion title="Descripción">
          <p className={carrerasStyle.paragraph}>
          La carrera de Ingeniería en Computación surgió en el año 2010 y es la primera carrera compartida entre la Facultad de Informática y la Facultad de Ingeniería.
          </p>
        </Accordion>

        <Accordion title="Alcance del título">
        <p className={carrerasStyle.paragraph}>
            1- Relevar y analizar los procesos de una Organización, con la finalidad de especificar el equipamiento electrónico (de control, procesamiento de datos y comunicaciones) que requiera y los sistemas de software que hagan a su funcionamiento.<br /><br />
            
            2- Entender, planificar, dirigir y/o controlar la instalación y mantenimiento de sistemas electrónicos de procesamiento de datos/señales que requieran control por software.<br /><br />
            
            3- Entender, planificar y/o participar de los estudios técnicos-económicos de factibilidad y/o referentes a la configuración y dimensionamiento de sistemas electrónicos (de control, procesamiento de datos y comunicaciones) y su software asociado.<br /><br />
            
            4- Supervisar la implantación de sistemas que integren hardware y software así como organizar y capacitar al personal afectado por dichos sistemas.<br /><br />
            
            5- Desarrollar y aplicar técnicas de seguridad en lo referente al acceso y disponibilidad de la información, como así también, los respaldos de seguridad de todos los recursos, como así también de la información procesada por los mismos.<br /><br />
            
            6- Determinar, regular y administrar las pautas operativas y reglas de control que hacen al funcionamiento de las áreas informáticas de las empresas y organizaciones. También diseñar y confeccionar los manuales de procesos y los formularios requeridos para el procesamiento de la Información.<br /><br />
            
            7- Efectuar tareas de auditoría, arbitrajes, pericias y tasaciones relacionados con el equipamiento electrónico y los sistemas de software que hagan a su funcionamiento.<br /><br />
            
            8- Realizar tareas como docente universitario en Electrónica / Informática.<br /><br />
            
            9- Realizar tareas de Investigación y Desarrollo en temas que vinculen la Electrónica con la Informática, en particular en las áreas de Sistemas Industriales, Procesamiento de Señales y Sistemas Distribuidos.
        </p>
        </Accordion>

        <Accordion title="Plan de estudios">
         <TableComputacion />
        </Accordion>

        <Accordion title="Optativas 2023">
         <TableOptativasComputacion />
        </Accordion>


      </main>
      <SeccionCarreras/>
      <Footer />
    </div>
  );
}
