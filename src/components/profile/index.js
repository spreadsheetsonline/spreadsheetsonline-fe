import React from 'react';


export const Profile = (props) => {
  return (
    <div className="user-profile">
    <img src={props.userProfile.picture} alt=""/>
    <p>{props.userProfile.name}</p>
  </div>
  );
}