import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Hero from '../../Components/Hero/Hero';
import TeamMembersAPI from '../../TeamMembersAPI';
import styles from './Feed.module.css';
import CardsList from '../../Components/CardsList/CardsList';
import { ReactComponent as LogoTwitter } from '../../assets/logos/logo-twitter.svg';
import Header from '../../Components/Header/Header';
import defaultStrings from '../../utils/defaultStrings.json';

const Feed = () => {
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
          title={_.get(defaultStrings, 'feed.heroTitle', '')}
          subtitle={_.get(defaultStrings, 'feed.heroSubtitle', '')}
        />
        <span className={styles['latest-tweets']}>
          <LogoTwitter /> Latest tweets from our team
        </span>
        {_.size(members) > 0 && <CardsList members={members} />}
      </div>
    </>
  );
};

export default Feed;
