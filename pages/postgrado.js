import Head from "next/head";
import Navbar from "../components/NavBar";
import headerStyle from "../styles/Header.module.css";
import Footer from "../components/Footer";

import carrerasStyle from "../styles/Carreras.module.css"; 

export default function Postgrado(){
    return(
        <div>
        <Head>
          <title>Ingeniería en Energía Eléctrica - UNLP</title>
          <link rel="icon" href="/cropped-logo-tp.png" />
        </Head>
        <a href="/">
         <img src="/banner-hd.png" className={headerStyle.header}  />
        </a>
        <Navbar />
  
        <main className={carrerasStyle.mainContent}>
          <div className={carrerasStyle.divContainer}> 
            <h1 className={carrerasStyle.title}>Cursos de postgrado</h1>
          </div>
          <div>
            <p> 
                Si desea obtener información sobre Cursos de posgrado, 
                Maestrías y Doctorados que se dictan en la Facultad, por favor diríjase a la siguiente página: 
            </p>
            <p> <a href="https://posgrado.ing.unlp.edu.ar/posgrado/">EPEC (Escuela de Postgrado y Educación Continua).</a></p>
          </div>
          
          
        </main>
        <Footer />
      </div>

    );
}

