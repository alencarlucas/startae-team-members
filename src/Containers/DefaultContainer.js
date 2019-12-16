import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Hero from '../Components/Hero/Hero';
import TeamMembersAPI from '../TeamMembersAPI';
import styles from './Container.module.css';
import CardsList from './CardsList/CardsList';
import { ReactComponent as LogoTwitter } from '../assets/logos/logo-twitter.svg';

const DefaultContainer = ({ heroTitle, heroSubject, heroTextAlignment }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function loadMembers() {
      setMembers(await TeamMembersAPI.getAll());
    }

    loadMembers();
  }, []);

  return (
    <div className="container">
      <Hero
        title={heroTitle}
        subject={heroSubject}
        textAlignment={heroTextAlignment}
      />
      <span className={styles['latest-tweets']}>
        <LogoTwitter /> Latest tweets from our team
      </span>
      <CardsList members={members} />
    </div>
  );
};

DefaultContainer.propTypes = {
  heroTitle: propTypes.string.isRequired,
  heroSubject: propTypes.string.isRequired,
  heroTextAlignment: propTypes.string
};

DefaultContainer.defaultProps = {
  heroTextAlignment: 'left'
};

export default DefaultContainer;
