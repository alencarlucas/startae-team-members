import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './Card.module.css';

const getTwitterUser = twitterURL => {
  return _.last(_.split(twitterURL, '/'));
};

const Card = ({ member }) => {
  return (
    <div className={styles.avatar}>
      <img className={styles.avatar} srcSet={member.avatar} alt={member.name} />
      <h4 className="card__name">{member.name}</h4>
      <p className="card__user">{`@${getTwitterUser(member.twitter)}`}</p>
      <p className="card__role">{member.role}</p>
      <p className="card__tweet">{member.tweet}</p>
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
