import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Hero from '../../Components/Hero/Hero';
import TeamMembersAPI from '../../TeamMembersAPI';
import styles from './Feed.module.css';
import CardsList from '../../Components/CardsList/CardsList';
import { ReactComponent as LogoTwitter } from '../../assets/logos/logo-twitter.svg';
import Header from '../../Components/Header/Header';

const Feed = ({ heroTitle, heroSubject, heroTextAlignment }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function loadMembers() {
      setMembers(await TeamMembersAPI.getAll());
    }

    loadMembers();
  }, []);

  return (
    <>
      <Header />
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
    </>
  );
};

Feed.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroSubject: PropTypes.string.isRequired,
  heroTextAlignment: PropTypes.string
};

Feed.defaultProps = {
  heroTextAlignment: 'left'
};

export default Feed;
