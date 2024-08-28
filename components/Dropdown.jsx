import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import dropdownStyles from '../styles/Dropdown.module.css'; // Importa los estilos del dropdown

const Dropdown = ({ items }) => {
  const [subMenu, setSubMenu] = useState(null);
  const router = useRouter();
  const handleMouseEnter = (index) => {
    setSubMenu(index);
  };
  const handleMouseLeave = () => {
    setSubMenu(null);
  };

  const handleMouseClick = (ref) => {
    router.push(ref)
  }
  return (
    <div className={dropdownStyles.dropdownContent}>
    {items.map((item, index) => (
      <div
        key={index}
        className={dropdownStyles.dropdownItem}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <a onClick={() => handleMouseClick(item.url)} target={item.targ} >{item.label}</a>
        {item.subItems && subMenu === index && (
          <Dropdown items={item.subItems} />
        )}
      </div>
    ))}
  </div>
  );
};

export default Dropdown;