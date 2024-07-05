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

  return (
    <div className={styles.pageContainer}>
      <div className={styles.gridContainer}>
        <NewsPosts setNewsItems={setNewsItems} />
        {newsItems.slice(0, 4).map((item) => (
          <div key={item.id} className={styles.gridItem}>
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