import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './Containers/Feed/Feed';
import Timeline from './Containers/Timeline/Timeline';
import './App.css';

const App = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <Feed
            heroTitle="Meet our team"
            heroSubject="We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."
            heroTextAlignment="left"
          />
        )}
      />
      <Route path="/timeline/:name" component={Timeline} />
    </>
  );
};

export default App;
