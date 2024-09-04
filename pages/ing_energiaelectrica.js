import Head from "next/head";
import Navbar from "../components/NavBar";
import headerStyle from "../styles/Header.module.css";
import Footer from "../components/Footer";
import SeccionCarreras from "../components/SeccionCarreras";

import carrerasStyle from "../styles/Carreras.module.css"; 
import Accordion from "../components/Accordion";
import TableEnergiaElectrica from "../components/TableEnergiaElectrica";
import TableOptativasEnergiaElectrica from "../components/TableOptativasEnergiaElectrica";


export default function IngenieriaEnergiaElectrica() {
  return (
    <div>
      <Head>
        <title>Ingeniería en Energía Eléctrica - UNLP</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>

      <img src="/banner-hd.png" className={headerStyle.header} alt="Banner de Ingeniería en Energia Electrica" />
      <Navbar />

      <main className={carrerasStyle.mainContent}>
        <div className={carrerasStyle.divContainer}> 
          <h1 className={carrerasStyle.title}>Ingeniería en Energía Eléctrica</h1>
        </div>
        
        <p className={carrerasStyle.paragraph}>
          Encontrá acá información sobre la carrera, alcances del título, plan de estudios y las optativas.
        </p>

        <Accordion title="Descripción">
          <p className={carrerasStyle.paragraph}>
                La energía eléctrica debe ser producida, transmitida y distribuida para que finalmente los usuarios puedan utilizarla según sus necesidades. <br /><br />

                Podemos agrupar estas necesidades en categorías como domiciliaria, industrial y comercial.<br /><br />

                El ingeniero electricista tiene incumbencia en todas las etapas mencionadas, desde la producción en las centrales hasta el consumo en las instalaciones específicas.<br /><br />

                Cada una de las fases representa una especialización en sí misma.<br /><br />

                Aún más; se requieren profesionales que de manera concisa se dediquen a tópicos tales como el de las protecciones eléctricas, la construcción de líneas de muy alta tensión para conducir la energía hasta los grandes centros de consumo, el diseño de subestaciones para distribuirla en los niveles de tensión más adecuados, el empleo de energías alternativas, el estudio del ahorro energético, la planificación de redes; es decir, prever la expansión de la demanda y programar la oferta. <br /><br />

                También participa en arbitrajes, pericias y tasaciones relacionadas con estos temas.<br /><br />
            </p>
        </Accordion>

        <Accordion title="Alcance del título">
        <p className={carrerasStyle.paragraph}>
                Estudio, factibilidad, proyecto, planificación, dirección, construcción, instalación, puesta en marcha, operación, ensayos, mediciones, mantenimiento, reparación, modificación, transformación e inspección de: <br /><br />

                1. Sistemas de generación, transmisión, distribución, conversión, control, automatización, recepción, procesamiento y utilización de energía eléctrica en todas las frecuencias y potencias, excepto obras civiles e industriales. <br /><br />
                2. Laboratorios de todo tipo relacionados con el inciso anterior.<br /><br />
                3. Sistemas de control.<br /><br />
                4. Instalaciones que utilicen señales electromagnéticas como accesorio de lo detallado en el párrafo anterior.<br /><br />
                5. Participación en desarrollos de computación aplicada a la Ingeniería, incluyendo los productos de programación (software) y los dispositivos genéricos (hardware).<br /><br />
                6. Participar en la elaboración de políticas de tarifas, precios y costos marginales de generaciones, transporte y distribución de energía eléctrica.<br /><br />
                7. Participar en la evaluación económica de proyectos de inversión de Ingeniería Eléctrica.<br /><br />
                <br /><br />
                Estudios, tareas y asesoramientos relacionados con:<br /><br />

                1. Asuntos de ingeniería Legal, económica y financiera.<br /><br />
                2. Arbitrajes, pericias y tasaciones.<br /><br />
                3. Higiene, seguridad industrial y contaminación ambiental.<br /><br />

        </p>
        </Accordion>

        <Accordion title="Plan de estudios">
         <TableEnergiaElectrica />
        </Accordion>

        <Accordion title="Optativas 2023">
         <TableOptativasEnergiaElectrica />
        </Accordion>
       
        
      </main>
      <SeccionCarreras/>
      <Footer />
    </div>
  );
}
