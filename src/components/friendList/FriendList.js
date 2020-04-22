import React from "react";
import PropTypes from "prop-types";
import styleFriend from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styleFriend.friendlist}>
    {friends.map((friend) => (
      <li key={friend.id} className={styleFriend.item}>
        <span className={friend.isOnline ? styleFriend.onLine : styleFriend.offLine}></span>
        <img
          className={styleFriend.avatar}
          src={friend.avatar}
          alt="user avatar"
          width="48"
        />
        <p className={styleFriend.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired,
};

export default FriendList;
