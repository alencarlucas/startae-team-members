import React from 'react';
import './App.css';
import DefaultContainer from './Containers/DefaultContainer';

const App = () => {
  return (
    <DefaultContainer
      heroTitle="Meet our team"
      heroSubject="We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."
      heroTextAlignment="left"
    />
  );
};

export default App;
