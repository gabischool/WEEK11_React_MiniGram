import React from "react";

function ProfileCard({ username, onBack }) {
  const avatarLetter = username.slice(0, 1).toUpperCase();

  return (
    <div className="profile">
      <div className="profileAvatar">{avatarLetter}</div>
      <h3 className="profileUsername">@{username}</h3>
      <button className="goback" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

export default ProfileCard;
