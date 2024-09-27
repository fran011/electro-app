import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'; 
import styles from "../styles/PostClubes.module.css";
import URLS from "../data/URLS.json";

const PostList = ({ categoriaUrl }) => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState({});
  const router = useRouter(); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(categoriaUrl);
        const data = await response.json();
        setPosts(data);

        // Para cada post, buscamos su imagen destacada
        const fetchFeaturedImages = async () => {
          const imagePromises = data.map(async (post) => {
            if (post.featured_media) {
              const imageResponse = await fetch(`http://electro.ing.unlp.edu.ar/wp-json/wp/v2/media/${post.featured_media}`);
              const imageData = await imageResponse.json();
              return { id: post.id, imageUrl: imageData.source_url };
            }
            return { id: post.id, imageUrl: "https://via.placeholder.com/300" }; // Placeholder si no tiene imagen destacada
          });

          const imageResults = await Promise.all(imagePromises);

          const imageMap = imageResults.reduce((acc, { id, imageUrl }) => {
            acc[id] = imageUrl;
            return acc;
          }, {});

          setImages(imageMap);
        };

        fetchFeaturedImages();
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, [categoriaUrl]);

  const handlePostClick = (id) => {
    router.push(`/postClubes/${id}`); 
  };

  // Función para eliminar etiquetas HTML
  const removeHtmlTags = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div.innerText || div.textContent || "";
  };

  // Función para limitar el número de caracteres
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      <div className={styles.divContainer}>
        {posts.map((post) => (
          <div className={styles.divItem} key={post.id}>
            <img 
              src={images[post.id] || "https://via.placeholder.com/300"} 
              alt={post.title.rendered}
              className={styles.postImage} 
            />
            <h4 className={styles.title} onClick={() => handlePostClick(post.id)} style={{ cursor: "pointer" }}>
              {post.title.rendered}
            </h4>

            {/* Limpiamos las etiquetas HTML y limitamos a 100 caracteres */}
            <p className={styles.description}>{truncateText(removeHtmlTags(post.excerpt.rendered), 100)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
