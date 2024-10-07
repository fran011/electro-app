import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'; 
import PostList from "../../components/PostList";
import Head from "next/head";
import Navbar from "../../components/NavBar";
import headerStyle from "../../styles/Header.module.css";
import Footer from "../../components/Footer";

import styles from "../../styles/PostClubes.module.css";
import URLS from "../../data/URLS.json";

const Post_Robotica = () => {
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
      <a href="https://www.instagram.com/cdrfiunlp/?hl=es">
        <div className={styles.imageContainer} >
          <img className={styles.imageRobotica} src="https://electro.ing.unlp.edu.ar/wp-content/uploads/2023/11/robotica-1.png" alt="Imagen club"/>
        </div>
      </a>
      <div className={styles.pContainer}>
        <h2 className={styles.title}> ¿Qué es el club? </h2>
        <p> Es un espacio de estudiantes para estudiantes, orientado a que toda la gente que quiera sumarse pueda desarrollar 
            sus actividades extracurriculares en la facultad con todo el apoyo y el equipamiento que el club puede brindar. 
            El objetivo es contar con un espacio para llevar a la práctica todos los 
            conocimientos que se van aprendiendo a lo largo de la carrera y desarrollar proyectos personales, o incluso trabajos finales. </p>
      </div>
      <PostList categoriaUrl={URLS.wordpress.clubes.categoria67}/>
      <Footer />
    </div>
  );
};

export default Post_Robotica;
