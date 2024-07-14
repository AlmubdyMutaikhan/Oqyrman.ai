import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

import './NavbarBottom.scss';
import usePageStore from '../../../stores/usePageStore';
import { useTranslation } from 'react-i18next';

const NavbarBottom = () => {
  const { selectedTab, setSelectedTab } = usePageStore(state => ({selectedTab:  state.selectedTab,
    setSelectedTab: state.selectedTab
  }));

  const navbarItems = [
    { name: 'Main', icon: faHome, route: '/' },
    { name: 'Bookshelf', icon: faBook, route: '/bookshelf' },
    { name: 'Forum', icon: faUsers, route: '/threads' },
    { name: 'MyProfile', icon: faUser, route: '/profile' },
  ];

  const { t } = useTranslation();
  return (
    <nav className="bottom-navbar">
     {navbarItems.map((item) => (
        <Link
          onClick={() => { usePageStore.getState().setSelectedTab(item.name)}}
          key={item.name}
          to={item.route}
          className={`nav-item ${selectedTab === item.name ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={item.icon} />
          <span>{t(item.name)}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavbarBottom;
