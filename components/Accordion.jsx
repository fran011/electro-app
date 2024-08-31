import React, { useState } from 'react'; 

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si está abierto o cerrado

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Cambia el estado entre abierto y cerrado
  };

  return (
    <div>
      <button onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div style={{ marginTop: '10px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
