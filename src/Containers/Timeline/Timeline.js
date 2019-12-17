import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Hero from '../../Components/Hero/Hero';
import TimelineItem from '../../Components/TimelineItem/TimelineItem';
import TeamMembersAPI from '../../TeamMembersAPI';
import styles from './Timeline.module.css';
import { ReactComponent as LogoTwitter } from '../../assets/logos/logo-twitter.svg';
import Header from '../../Components/Header/Header';

const Feed = ({ match }) => {
  const [member, setMember] = useState('');
  const memberName = _.get(match, 'params.name', '');
  const data = Array.from(Array(5));

  useEffect(() => {
    async function loadMember() {
      setMember(await TeamMembersAPI.getMemberByName(memberName));
    }

    loadMember();
  });

  return (
    <>
      <Header isAnchor />
      <div className="container">
        <Hero
          title={_.get(member, 'name', '')}
          subject={_.get(member, 'role', '')}
          textAlignment="center"
        />
        <span className={styles['latest-tweets']}>
          <LogoTwitter />
          {`@${_.get(member, 'twitterUser')}`}
        </span>
        <div className={`${styles['timeline-container']} container`}>
          {_.map(data, (value, index) => (
            <TimelineItem
              avatar={_.get(member, 'avatar', '')}
              tweet={_.get(member, 'tweet', '')}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Feed.propTypes = {
  match: PropTypes.instanceOf({}).isRequired
};

export default Feed;
