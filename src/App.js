import React from 'react';
import { Route } from 'react-router-dom';
import Feed from './Containers/Feed/Feed';
import Timeline from './Containers/Timeline/Timeline';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Feed} />
      <Route path="/timeline/:name" component={Timeline} />
    </>
  );
};

export default App;
