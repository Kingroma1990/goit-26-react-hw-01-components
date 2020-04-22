import React from "react";
import PropTypes from "prop-types";
import stylePro from "./profile.module.css";

const Profile = ({ ...user }) => (
  <div className={stylePro.profile}>
    <div className={stylePro.description}>
      <img src={user.avatar} alt="user avatar" className={stylePro.avatar} />
      <p className={stylePro.name}>{user.name}</p>
      <p className={stylePro.tag}>{user.tag}</p>
      <p className={stylePro.location}>{user.location}</p>
    </div>
    <ul className={stylePro.stats}>
      <li>
        <span className={stylePro.label}>Followers</span>
        <span className={stylePro.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={stylePro.label}>Views</span>
        <span className={stylePro.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={stylePro.label}>Likes</span>
        <span className={stylePro.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
