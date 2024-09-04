import React, { useState } from 'react'; 
import style from '../styles/Accordion.module.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si está abierto o cerrado

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Cambia el estado entre abierto y cerrado
  };

  return (
    <div>
      <button className={style.button} onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className={style.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
