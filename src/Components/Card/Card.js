import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './Card.module.css';

const DEFAULT_USER_PROFILE_PIC = '/default_user_profile_pic.png';

const getTwitterUser = twitterURL => {
  return _.last(_.split(twitterURL, '/'));
};

const Card = ({ member }) => {
  const [avatarSrc, setAvatarSrc] = useState(member.avatar);

  const onImageErrorHandler = e => {
    e.preventDefault();

    setAvatarSrc(DEFAULT_USER_PROFILE_PIC);
  };

  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img
          className={styles.avatar}
          srcSet={avatarSrc}
          alt={member.name}
          onError={onImageErrorHandler}
        />
      </div>
      <h2 className={styles.name}>{member.name}</h2>
      <h3 className={styles.twitter}>{`@${getTwitterUser(member.twitter)}`}</h3>
      <h3 className={styles.role}>{member.role}</h3>
      <h3 className={styles.tweet}>{`"${member.tweet}"`}</h3>
    </div>
  );
};

Card.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    role: PropTypes.string,
    tweet: PropTypes.string,
    twitter: PropTypes.string
  }).isRequired
};

export default Card;
