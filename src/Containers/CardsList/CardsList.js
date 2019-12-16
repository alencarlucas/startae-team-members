import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';
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
  members: PropTypes.instanceOf(Array).isRequired
};

export default CardsList;
