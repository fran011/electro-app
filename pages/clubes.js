import React, { useState } from 'react';
import Head from "next/head";
import Navbar from "../components/NavBar";
import Clubes from '../components/Clubes';
import styles from "../styles/novedades.module.css"; 

const Novedades = () => {
  const [newsItems, setNewsItems] = useState([]);

  return (
    <div>
      <Head>
        <title>Novedades - Departamento de Electrotecnia</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>
      <Navbar />
      <main>
        <Clubes club={"DevOps"} clubID={66} />
      </main>
    </div>
  );
};

export default Novedades;