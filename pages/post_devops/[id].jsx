import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/NavBar";
import PostClubes from "../../components/PostClubes";
import { Slide } from "react-slideshow-image";

const postC = () => {
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`http://electro.ing.unlp.edu.ar/wp-json/wp/v2/media?parent${id}`);
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
    }, [id]);

    return(
        <div>
            <Head>
                <title>Novedades - Departamento de Electrotecnia</title>
                <link rel="icon" href="/cropped-logo-tp.png" />
            </Head>
            <Navbar />
            <main>
                <PostClubes parentId={id}/>
            </main>
        </div>
    )
}

export default postC;