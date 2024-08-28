import Head from "next/head";
import Navbar from "../components/NavBar"; 
import Footer from "../components/Footer";
import UnidadesInv from "../components/UnidadesInv";
import headerStyle from "../styles/Header.module.css";

export default function unidadesInv() {
    return(
        <div>
            <Head>
                <title>Departamento de Electrotecnia</title>
                <link rel="icon" href="/cropped-logo-tp.png" />
            </Head>
            <a href="/">
            <img src="/banner-hd.png" className={headerStyle.header} />
            </a>
            <Navbar />
            <main>
                <UnidadesInv/>  
            </main>
            <Footer/>
        </div>
    );
}