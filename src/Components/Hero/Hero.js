import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

const Hero = ({ title, subject, textAlignment = 'left' }) => {
  console.log('styles', styles);
  return (
    <div className={styles.hero} style={{ textAlign: textAlignment }}>
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
