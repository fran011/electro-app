import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Clubes.module.css"

const Clubes = ({club, clubID}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=${clubID}')
        .then(response => response.json())
        .then(data => {
            const formattedNews = data
            .map(post => ({
                id: post.id,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered, // Extract the excerpt for a brief description
                content: post.content.rendered,
                date: new Date(post.date) // Convert date to Date object
            }))
            .sort((a, b) => b.date - a.date); // Sort by date descending
        setPosts(formattedNews);
      })
      .catch(error => console.error('Error fetching news:', error));
    });
    

    return( 
        <div className={styles.divContainer}>
            {posts.map(post => {
                <div key={post.id} className={styles.divItem}>
                    <h2>{post.title.rendered}</h2>
                </div>
            })}
        </div>
    )
}

export default Clubes