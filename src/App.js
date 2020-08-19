import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import './App.css';
// import GlobalStyles from './styles/globalStyles';

import Container from './Container';

function App () {

  return (
    <Router>
      <div className="App">
        <Container/>
      </div>
    </Router>
  );
}

export default App;