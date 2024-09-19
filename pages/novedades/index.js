import React, { useState } from 'react';
import Head from "next/head";
import Navbar from "../../components/NavBar";
import NewsPosts from "../../components/NewsPosts"; 
import styles from "../../styles/novedades.module.css"; 
import URLS from '../../data/URLS.json';

const Novedades = () => {
  const [newsItems, setNewsItems] = useState([]);

  return (
    <div>
      <Head>
        <title>Novedades - Departamento de Electrotecnia</title>
        <link rel="icon" href="/cropped-logo-tp.png" />
      </Head>
      <Navbar />
      <main className={styles.gridContainer}>
        <NewsPosts setNewsItems={setNewsItems} url={URLS.wordpress.last_news} /> {/* Use NewsPosts to fetch and set news items */}
        {newsItems.map((item) => (
          <div key={item.id} className={styles.gridItem}>
            <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Novedades;