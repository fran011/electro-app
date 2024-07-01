import React from 'react';
import styles from '../styles/lastNews.module.css'; 

const LastNews= () => {
  const newsItems = [
    { title: 'Novedad 1', description: 'Descripción de la novedad ' },
    { title: 'Novedad 2', description: 'Descripción de la novedad ' },
    { title: 'Novedad 3', description: 'Descripción de la novedad ' },
    { title: 'Novedad 4', description: 'Descripción de la novedad ' },
  ];

  return (
    <div className={styles.gridContainer}>
      {newsItems.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LastNews;