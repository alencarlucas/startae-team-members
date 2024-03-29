import React, { useState } from 'react';
import styles from './Card.module.css';
import types from '../../utils/types';

const DEFAULT_USER_PROFILE_PIC = '/default_user_profile_pic.png';

const Card = ({ member }) => {
  const { name, avatar, role, tweet, twitterUser } = member;
  const [avatarSrc, setAvatarSrc] = useState(avatar);

  const onImageErrorHandler = e => {
    e.preventDefault();

    setAvatarSrc(DEFAULT_USER_PROFILE_PIC);
  };

  return (
    <a href={`/timeline/${name}`} className={styles['card-anchor']}>
      <div className={styles.card}>
        <div className={styles.photo}>
          <img
            className={styles.avatar}
            srcSet={avatarSrc}
            alt={name}
            onError={onImageErrorHandler}
          />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.twitter}>{`@${twitterUser}`}</h3>
        <h3 className={styles.role}>{role}</h3>
        <h3 className={styles['role--mobile']}>{role}</h3>
        <h3 className={styles['twitter--mobile']}>{`@${twitterUser}`}</h3>
        <h3 className={styles.tweet}>{`"${tweet}"`}</h3>
      </div>
    </a>
  );
};

Card.propTypes = {
  member: types.Member.isRequired
};

export default Card;
