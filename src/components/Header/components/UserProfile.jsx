import React from 'react'
import Profile from 'components/Header/icons/profile.png'

const UserProfile = ({ userName = 'Your name' }) => {
  return (
    <div style={flexStyles}>
        <img src={Profile} />
        &nbsp;
        <div> {userName} </div>
    </div>
  );
};

const flexStyles = {
  display: 'flex',
  alignItems: 'center' 
}

export default UserProfile;