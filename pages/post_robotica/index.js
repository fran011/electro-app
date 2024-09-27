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
      <PostList categoriaUrl={URLS.wordpress.clubes.categoria67}/>
      <Footer />
    </div>
  );
};

export default Post_Robotica;
