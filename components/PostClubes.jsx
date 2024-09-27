import React, { useEffect, useState } from "react";
import styles from "../styles/PostClubes.module.css";
import Slider from "./SlideShow";

const PostClubes = ({parentId}) => {
    const [imagePost, setImagePost] = useState([]);


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`http://electro.ing.unlp.edu.ar/wp-json/wp/v2/media?parent=${parentId}`);
                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }
                const data = await response.json();
                const urls = data.map((item) => item.source_url);
                setImagePost(urls);  // Actualizamos el estado con las URLs
                console.log(urls);    // Mostramos las URLs en consola
            } catch (error) {
                console.log("Error en búsqueda de imágenes", error);
            }
        };
        fetchImages();
    }, [parentId]);

    return (
        <div>
            {imagePost.length > 0 ? (  // Verificamos si hay imágenes antes de mostrar el Slider
                <Slider images={imagePost} />
            ) : (
                <p>Cargando imágenes...</p>
            )}
        </div>
    );
};

export default PostClubes;
