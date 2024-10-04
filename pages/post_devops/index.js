import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'; 
import PostList from "../../components/PostList";
import Head from "next/head";
import Navbar from "../../components/NavBar";
import headerStyle from "../../styles/Header.module.css";
import Footer from "../../components/Footer";

import styles from "../../styles/PostClubes.module.css";
import URLS from "../../data/URLS.json";

const Post_DevOps = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState({});
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Ingeniería en Computación - UNLP</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>
      <a href="/">
        <img src="/banner-hd.png" className={headerStyle.header} alt="Banner de Ingeniería en Computación" />
      </a>
      <Navbar />
      <a href="https://clubdevops.ar/about/">
        <div className={styles.imageContainer} >
          <img className={styles.image2} src="https://clubdevops.ar/logo-resumido-resize.jpeg" alt="Imagen club"/>
          <img className={styles.image} src="https://clubdevops.ar/logo-resize.jpeg" alt="Imagen club 2"/>
        </div>
      </a>
      <div className={styles.pContainer}>
        <h2 className={styles.title}> ¿Qué es el club? </h2>
        <p> En Marzo de 2023 se fundó oficialmente el Club de Ciencia y Tecnología “DevOps” el cual funciona dentro del Departamento de Electrotecnia
            y Electrónica de la Facultad de Ingeniería de la UNLP, 
            con la intención de darle más fuerza al área de informática dentro de la Facultad de Ingeniería. </p>
      </div>
      <PostList categoriaUrl={URLS.wordpress.clubes.categoria66}/>
      <Footer />
    </div>
  );
};

export default Post_DevOps;
