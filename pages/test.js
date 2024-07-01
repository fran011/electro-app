import Head from "next/head";
import Navbar from "../components/NavBar";
import LastNews from "../components/LastNews";
import headerStyle from "../styles/Header.module.css"
//import styles from "../styles/Home.module.css";

export default function Test() {
  return (
    <div>
      <Head>
        <title>Departamento de Electrotecnia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/header.png" className={headerStyle.header}/>
        <Navbar />
        <main>
        
        <LastNews />
      </main>

    </div>
  );
}
