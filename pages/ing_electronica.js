import Head from "next/head";
import Navbar from "../components/NavBar";
import headerStyle from "../styles/Header.module.css";
import Footer from "../components/Footer";
import SeccionCarreras from "../components/SeccionCarreras";

import carrerasStyle from "../styles/Carreras.module.css"; 
import Accordion from "../components/Accordion";
import TableElectronica from "../components/TableElectronica";
import TableOptativasElectronica from "../components/TableOptativasElectronica";


export default function IngenieriaElectronica() {
  return (
    <div>
      <Head>
        <title>Ingeniería en Electrónica - UNLP</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>

      <img src="/banner-hd.png" className={headerStyle.header} alt="Banner de Ingeniería en Electrónica" />
      <Navbar />

      <main className={carrerasStyle.mainContent}>
        <h1 className={carrerasStyle.title}>Ingeniería en Electrónica</h1>
        
        <p className={carrerasStyle.paragraph}>
        Encontrá acá información sobre la carrera, alcances del título, plan de estudios y las optativas.
        </p>

        <Accordion title="Descripción">
          <p>


          El progreso en las distintas ramas de la Electrónica es vertiginoso, y la formación de recursos humanos en este aspecto es un verdadero desafío.

El objetivo de esta carrera es formar profesionales capacitados para estudiar, diseñar, construir y mantener equipos, sistemas y dispositivos electrónicos y de procesamiento de señales electromagnéticas en general.

El plan de estudios está organizado de tal manera que, durante los primeros años, el alumno adquiere una sólida formación en ciencias físicas y matemáticas.

Sobre esa base podrá desarrollar los conocimientos tecnológicos fundamentales para convertirse en un profesional competente y preparado tanto para crear tecnología como para operarla de la mejor manera.

La carrera está articulada con un prestigioso programa de postgrado (Magister y Doctorado) que permite obtener una formación de excelencia para el medio productivo y la investigación científica.

       </p>
        </Accordion>

        <Accordion title="Alcance del título">
        <p>
            
            

Proyectar, planificar, diseñar, estudio de factibilidad, dirección, construcción, instalación, programación, operación, ensayo, medición, mantenimiento, reparación, transformación, puesta en funcionamiento e inspección de:

1. Sistemas, equipos, partes y piezas de generación, transmisión, recepción, distribución, conversión, control, medición, automatización, registro, reproducción, procesamiento y/o utilización de señales, ya sean eléctricas, electromagnéticas, ópticas, acústicas, o de otro tipo.
2. Sistemas, subsistemas, equipos, componentes, partes de sistemas irradiantes o de otros medios de enlace para comunicaciones, incluidos satélites y/o de aplicación espacial en todas las frecuencias y potencias.
3. Sistemas, subsistemas, equipos, componentes, partes y piezas de procesamiento electrónico de datos en todas sus aplicaciones incluyendo su programación asociada.
4. Sistemas, subsistemas, equipos, componentes, partes y piezas que impliquen electrónica, de navegación, o señalización o cualquier otra aplicación al movimiento de vehículos de cualquier tipo.
5. Sistemas, subsistemas, equipos, componentes, partes y piezas de control o automatización electrónica para cualquier aplicación y potencia.
6. Instalaciones que utilicen energía eléctrica como accesorio de lo detallado en los incisos anteriores.
7. Laboratorios de todo tipo relacionados con los incisos anteriores, excepto obras civiles.

Estudios, tareas y asesoramientos relacionados con:

1. Asuntos de ingeniería Legal, económica y financiera.
2. Arbitrajes, pericias y tasaciones.
3. Higiene, seguridad industrial y contaminación ambiental.

        </p>
        </Accordion>

        <Accordion title="Plan de estudios">
         <TableElectronica />
        </Accordion>

        <Accordion title="Optativas 2023">
         < TableOptativasElectronica />
        </Accordion>
       
        
      </main>
      <SeccionCarreras />
      <Footer />
    </div>
  );
}
