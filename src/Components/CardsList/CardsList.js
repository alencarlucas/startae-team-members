import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './CardsList.module.css';

const CardsList = ({ members }) => {
  return (
    <div className={styles['cards-list']}>
      {_.map(members, (member, index) => (
        <Card member={member} key={index} />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  members: PropTypes.instanceOf([]).isRequired
};

export default CardsList;
