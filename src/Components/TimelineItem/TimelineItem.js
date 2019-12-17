import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TimelineItem.module.css';

const DEFAULT_USER_PROFILE_PIC = '/default_user_profile_pic.png';

const TimelineItem = ({ avatar, tweet, tweetElapsedTime }) => {
  const [avatarSrc, setAvatarSrc] = useState(avatar);

  const onImageErrorHandler = e => {
    e.preventDefault();

    setAvatarSrc(DEFAULT_USER_PROFILE_PIC);
  };

  return (
    <div className={styles['timeline-item']}>
      <div className={styles['circle-wrapper']}>
        <span className={styles.circle} />
      </div>
      <div className={styles['timeline-item-content']}>
        <div className={styles['timeline-avatar-wrapper']}>
          <img
            className={styles['avatar-rounded']}
            src={avatarSrc}
            onError={onImageErrorHandler}
            alt=""
          />
        </div>
        <div className={styles['timeline-tweet']}>
          <time>{`${tweetElapsedTime}h`}</time>
          <p>{`"${tweet}"`}</p>
        </div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,
  tweetElapsedTime: PropTypes.number
};

TimelineItem.defaultProps = {
  tweetElapsedTime: 5
};

export default TimelineItem;
