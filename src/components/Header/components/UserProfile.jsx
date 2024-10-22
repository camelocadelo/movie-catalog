import React from 'react'
import Profile from './../profile.png'

const UserProfile = ({ userName = 'Your name' }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* replace profile png to svg */}
        <img src={Profile} />
        &nbsp;
        <div> {userName} </div>
    </div>
  );
};

export default UserProfile;