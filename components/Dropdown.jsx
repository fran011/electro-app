import { useState } from 'react';
import React from 'react';
import dropdownStyles from '../styles/Dropdown.module.css'; // Importa los estilos del dropdown

const Dropdown = ({ items }) => {
  const [subMenu, setSubMenu] = useState(null);
  
  const handleMouseEnter = (index) => {
    setSubMenu(index);
  };
  const handleMouseLeave = () => {
    setSubMenu(null);
  };
  return (
    <div className={dropdownStyles.dropdownContent}>
    {items.map((item, index) => (
      <div
        key={index}
        className={dropdownStyles.dropdownItem}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <a href={item.url}>{item.label}</a>
        {item.subItems && subMenu === index && (
          <Dropdown items={item.subItems} />
        )}
      </div>
    ))}
  </div>
  );
};

export default Dropdown;