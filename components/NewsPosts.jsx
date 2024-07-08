import React, { useEffect } from 'react';

const NewsPosts = ({ setNewsItems }) => {
  useEffect(() => {
    fetch('https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=14')
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

        setNewsItems(formattedNews);
      })
      .catch(error => console.error('Error fetching news:', error));
  }, [setNewsItems]);

  return null;
};

export default NewsPosts;