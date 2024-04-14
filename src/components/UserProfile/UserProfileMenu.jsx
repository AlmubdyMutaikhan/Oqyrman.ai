import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDraftingCompass,
  faBook,
  faSave,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const menuItems = [
  { icon: faDraftingCompass, text: 'Drafts' },
  { icon: faBook, text: 'My Subscriptions' },
  { icon: faSave, text: 'Saved' },
  { icon: faCog, text: 'Settings' },
];

const ProfileMenu = () => {
    const {t} = useTranslation();
  return (
    <div style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <div key={index} style={styles.menuItem}>
          <FontAwesomeIcon icon={item.icon} style={styles.icon} />
          <span style={styles.text}>{t(item.text)}</span>
          <FontAwesomeIcon icon="chevron-right" style={styles.chevron} />
        </div>
      ))}
    </div>
  );
};

// Styles object
const styles = {
  menuContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '10px',
    color: '#6e6e6e',
  },
  text: {
    flexGrow: 1,
    color: '#333',
  },
  chevron: {
    color: '#6e6e6e',
  },
};

export default ProfileMenu;
