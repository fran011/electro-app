import React, { useEffect, useState } from 'react';
import styles from '../styles/SeccionClubes.module.css';
import URLS from "../data/URLS.json"

const SeccionClubes = () => {
  const [titlesCategory63, setTitlesCategory63] = useState([]);
  const [titlesCategory66, setTitlesCategory66] = useState([]);
  const [titlesCategory67, setTitlesCategory67] = useState([]);
  const [currentIndex63, setCurrentIndex63] = useState(0);
  const [currentIndex66, setCurrentIndex66] = useState(0);
  const [currentIndex67, setCurrentIndex67] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response63 = await fetch(URLS.wordpress.clubes.categoria63);
        const data63 = await response63.json();
        const newsTitles63 = data63.map(post => post.title.rendered);
        setTitlesCategory63(newsTitles63);

        const response66 = await fetch(URLS.wordpress.clubes.categoria66);
        const data66 = await response66.json();
        const newsTitles66 = data66.map(post => post.title.rendered);
        setTitlesCategory66(newsTitles66);

        const response67 = await fetch(URLS.wordpress.clubes.categoria67);
        const data67 = await response67.json();
        const newsTitles67 = data67.map(post => post.title.rendered);
        setTitlesCategory67(newsTitles67);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news titles:', error);
        setLoading(false); // Desactivar el estado de carga si ocurre un error
      }
    };

    fetchTitles();
  }, []);

  useEffect(() => {
    if (titlesCategory63.length > 0) {
      const interval63 = setInterval(() => {
        setCurrentIndex63((prevIndex) => (prevIndex + 1) % titlesCategory63.length);
      }, 5000); 
      return () => clearInterval(interval63);
    }
  }, [titlesCategory63]);

  useEffect(() => {
    if (titlesCategory66.length > 0) {
      const interval66 = setInterval(() => {
        setCurrentIndex66((prevIndex) => (prevIndex + 1) % titlesCategory66.length);
      }, 5000); 
      return () => clearInterval(interval66);
    }
  }, [titlesCategory66]);

  useEffect(() => {
    if (titlesCategory67.length > 0) {
      const interval67 = setInterval(() => {
        setCurrentIndex67((prevIndex) => (prevIndex + 1) % titlesCategory67.length);
      }, 5000); 
      return () => clearInterval(interval67);
    }
  }, [titlesCategory67]);

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.mainTitle}>Últimas Novedades</h2>

      {}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className={styles.sliderContainer}>
          {titlesCategory63.length > 0 && (
            <div className={styles.sliderSection}>
              <div className={`${styles.sliderItem} ${styles.backgroundCategory63}`}>
                <a href="#" className={`${styles.title} ${styles.slide}`} key={`${currentIndex63}-${titlesCategory63[currentIndex63]}`}>
                  {titlesCategory63[currentIndex63]}
                </a>
              </div>
              <div className={styles.subtitle}>Cursos de postgrado - EPEC</div>
            </div>
          )}
          {titlesCategory66.length > 0 && (
            <div className={styles.sliderSection}>
              <div className={`${styles.sliderItem} ${styles.backgroundCategory66}`}>
                <a href="#" className={`${styles.title} ${styles.slide}`} key={`${currentIndex66}-${titlesCategory66[currentIndex66]}`}>
                  {titlesCategory66[currentIndex66]}
                </a>
              </div>
              <div className={styles.subtitle}>Club DevOps</div>
            </div>
          )}
          {titlesCategory67.length > 0 && (
            <div className={styles.sliderSection}>
              <div className={`${styles.sliderItem} ${styles.backgroundCategory67}`}>
                <a href="#" className={`${styles.title} ${styles.slide}`} key={`${currentIndex67}-${titlesCategory67[currentIndex67]}`}>
                  {titlesCategory67[currentIndex67]}
                </a>
              </div>
              <div className={styles.subtitle}>Club de Robótica</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SeccionClubes;
