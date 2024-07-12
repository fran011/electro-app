import Head from "next/head";
import Navbar from "../components/NavBar";
import LastNews from "../components/LastNews";
import headerStyle from "../styles/Header.module.css"
import Footer from "../components/Footer";
import Slider from "../components/SlideShow";
import MainTable from "../components/mainTable";
//import styles from "../styles/Home.module.css";

export default function Test() {
  return (
    <div>
      <Head>
        <title>Departamento de Electrotecnia</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>
      <img src="/banner-hd.png" className={headerStyle.header}/>
        <Navbar />
        <main>
        <Slider/>
        <MainTable/>
        <LastNews />
      </main>

      <Footer/>

    </div>
  );
}
