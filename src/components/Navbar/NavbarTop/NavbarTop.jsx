import React from 'react';
import { useTranslation } from 'react-i18next';
import './NavbarTop.scss'; // Make sure you have the correct path to your CSS file
import LanguageSelector from '../../LangSelector/LangSelector';
import ImageFrame from '../../Atoms/Image/Image';

function NavbarTop() {
  return (
    <div className="navbar-top">
      <span className="brand-name">OQYRMAN AI</span>
      <div className="navbar-top__tools">
        <div style={{display:'flex', justifyContent:'center'}}>
            200
        <ImageFrame src={'https://cdn1.iconfinder.com/data/icons/cash-coin-essentials-colored/48/JD-09-512.png'}
        height='20px' width='20px'/>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default NavbarTop;
