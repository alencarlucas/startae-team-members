import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

const Hero = ({ title, subject, textAlignment = 'left' }) => {
  return (
    <div className={`${styles.hero} ${styles[textAlignment]}`}>
      <h1>{title}</h1>
      <p>{subject}</p>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  textAlignment: PropTypes.oneOf(['left', 'center'])
};

Hero.defaultProps = {
  textAlignment: 'left'
};

export default Hero;
