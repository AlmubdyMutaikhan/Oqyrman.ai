import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './UserProfile.scss';
import ProfileMenu from './UserProfileMenu';
import { useTranslation } from 'react-i18next';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
const userData = {
    name: 'Оқырман',
    profilePic: 'https://avatars.mds.yandex.net/i?id=ebffcf4f7ae93c553bb1cb5aa118de6804e2b773-9106968-images-thumbs&n=13', // replace with path to user's profile pic
    role: 'Қолданушы',

  };
  
  const progressData = [
    { day: 'Дүйсенбі', pagesRead: 10 },
    { day: 'Сейсенбі', pagesRead: 15 },
    { day: 'Сәрсенбі', pagesRead: 2 },
    { day: 'Бейсенбі', pagesRead: 7 },
    { day: 'Жұма', pagesRead:  30}, 
  ];





const UserProfile = ({}) => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={userData.profilePic} alt={userData.name} className="profile-pic" />
        <h1 className="username">{userData.name}</h1>
        <button className="design-button">{userData.role}</button>

      </div>
      <div className="progress-chart">
        <LineChart width={300} height={200} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="pagesRead" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
      <div className="navigation">
        <ProfileMenu />
      </div>
      <button className="signout-button" onClick={() => {authService.logout(); window.location.reload()}}>Шығу</button>
    </div>
  );
};

export default UserProfile;
