import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import TeamMembersAPI from '../TeamMembersAPI';
import styles from './Container.module.css';
import Card from '../Components/Card/Card';

const DefaultContainer = ({ heroTitle, heroSubject, heroTextAlignment }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function loadMembers() {
      setMembers(await TeamMembersAPI.getAll());
    }

    loadMembers();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Hero
        title={heroTitle}
        subject={heroSubject}
        textAlignment={heroTextAlignment}
      />
      <Card member={members[0] || {}} />
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
