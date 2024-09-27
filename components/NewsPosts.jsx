import React, { useEffect } from 'react';

const NewsPosts = ({ setNewsItems, url }) => {
  
  useEffect(() => {
    fetch(url)
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
  }, [url, setNewsItems]);

  return null;
};

export default NewsPosts;