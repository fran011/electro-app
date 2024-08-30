import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer"
import Head from "next/head";
import headerStyle from "../../styles/Header.module.css"
import contentStyle from "../../styles/DetalleNovedades.module.css"

const NovedadDetalle = () => {
  const router = useRouter();
  const { id } = router.query;
  const [novedad, setNovedad] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setNovedad(data))
        .catch((error) => console.error("Error fetching news:", error));
    }
  }, [id]);

  if (!novedad) return <p>Cargando...</p>; 

  return (
      <div>
        <Head>
            <title>Departamento de Electrotecnia</title>
            <link rel="icon" href="/cropped-logo-tp.png" />
        </Head>
            <a href="/">
                <img src="/banner-hd.png" className={headerStyle.header} />
            </a>
        <Navbar/>
        <div className={contentStyle.divContainer}>
            <h1 className={contentStyle.title} dangerouslySetInnerHTML={{ __html: novedad.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: novedad.content.rendered }} />

        </div>
        <Footer/>
    </div>
  );
};

export default NovedadDetalle;
