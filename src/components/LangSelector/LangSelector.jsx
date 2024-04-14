import React from 'react';
import { useTranslation } from 'react-i18next';
import './LangSelector.scss'; // Ensure your styles are correctly imported

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languages = {
    en: {
      name: "EN",
      flag: "https://cdn0.iconfinder.com/data/icons/flags-of-the-world-2/128/united-states-3-512.png"
    },
    kaz: {
      name: "ҚАЗ",
      flag: "https://cdn0.iconfinder.com/data/icons/world-flags-rounded/900/kazakhstan_national_country_flag-2-512.png"
    },
    ru: {
      name: "РУС",
      flag: "https://cdn2.iconfinder.com/data/icons/flags_gosquared/64/Russia.png"
    }
  };

  const currentLanguageCode = i18n.language;
  const currentLanguage = languages[currentLanguageCode];

  return (
    <div className="language-dropdown-container">
      <div className="dropdown">
        <button className="dropbtn">
          <img src={currentLanguage.flag} alt={currentLanguage.name} style={{ width: '20px', marginRight: '8px' }} />
        </button>
        <div className="dropdown-content">
          {Object.entries(languages).map(([code, { name, flag }]) => (
            <button key={code} onClick={() => changeLanguage(code)} style={{ background: 'none', border: 'none', width: '100%' }}>
              <img src={flag} alt={name} style={{ width: '20px', marginRight: '8px' }} />
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
