import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NewsPosts from './NewsPosts';
import styles from '../styles/lastNews.module.css'; 

const LastNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({});
  const router = useRouter();

  const toggleExpand = (id) => {
    setExpandedPosts(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleViewMore = () => {
    router.push('/novedades');
  };

  const handleClick = (id) => {
    router.push(`/novedades/${id}`);
  };

  return (
    <div className={styles.pageContainer}>
      <h2 >Novedades</h2>
      <div className={styles.gridContainer}>
        <NewsPosts setNewsItems={setNewsItems} url={'https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=14'} />
        {newsItems.slice(0, 4).map((item) => (
          <div key={item.id} className={styles.gridItem} onClick={() => handleClick(item.id)}>
            <h3 
              dangerouslySetInnerHTML={{ __html: item.title }}
              onClick={() => toggleExpand(item.id)}
              style={{ cursor: 'pointer' }}
            ></h3>
            {expandedPosts[item.id] ? (
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: item.excerpt }}></div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleViewMore} className={styles.viewMoreButton}>Ver más</button>
      </div>
    </div>
  );
};

export default LastNews;