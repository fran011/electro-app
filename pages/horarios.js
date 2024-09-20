import React, { useState } from 'react';
import Head from "next/head";
import Navbar from "../components/NavBar";
import headerStyle from "../styles/Header.module.css"
import CalendarComponent from '../components/Calendario';
export default function horarios(){
    return(
        <div>
            <Head>
                <title>Novedades - Departamento de Electrotecnia</title>
                <link rel="icon" href="/cropped-logo-tp.png" />
            </Head>
            <a href="/">
                <img src="/banner-hd.png" className={headerStyle.header} />
            </a>
            <Navbar />
            <main> 
                <CalendarComponent/>
            </main>
        </div>    
    );
}