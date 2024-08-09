import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Dropdown from './Dropdown';
import { carrerasItems, institucinalItems, investigacionItems, noticiasItems, barcalaItems, clubesItems } from '../data/menuItems';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navDiv}
           onMouseEnter={() => handleMouseEnter('institucional')}
           onMouseLeave={handleMouseLeave}
      >
        <a href="/" className={styles.navItem}>Institucional</a>
        {activeDropdown === 'institucional' && <Dropdown items={institucinalItems} />}
      </div>
      <div className={styles.navDiv}
           onMouseEnter={() => handleMouseEnter('carreras')}
           onMouseLeave={handleMouseLeave}
      >
        <a href="#" className={styles.navItem}>Carreras</a>
        {activeDropdown === 'carreras' && <Dropdown items={carrerasItems} />}
      </div>
      <div className={styles.navDiv}
           onMouseEnter={() => handleMouseEnter('investigacion')}
           onMouseLeave={handleMouseLeave}
      >
        <a href="/" className={styles.navItem}>Investigacion</a>
        {activeDropdown === 'investigacion' && <Dropdown items={investigacionItems} />}
      </div>
      <div className={styles.navDiv}
           onMouseEnter={() => handleMouseEnter('noticias')}
           onMouseLeave={handleMouseLeave}
      >
        <a href="/" className={styles.navItem}>Noticias</a>
        {activeDropdown === 'noticias' && <Dropdown items={noticiasItems} />}
      </div>
      <div className={styles.navDiv}
           onMouseEnter={() => handleMouseEnter('barcala')}
           onMouseLeave={handleMouseLeave}
      >
        <a href="/" className={styles.navItem}>Barcala</a>
        {activeDropdown === 'barcala' && <Dropdown items={barcalaItems} />}
      </div>
      <div className={styles.navDiv}
        onMouseEnter={() => handleMouseEnter('clubes')}
        onMouseLeave={handleMouseLeave}
      >
        <a href="/" className={styles.navItem}>Clubes</a>
        {activeDropdown === 'clubes' && <Dropdown items={clubesItems} />}
      </div>
    </nav>
  );
};

export default Navbar;
