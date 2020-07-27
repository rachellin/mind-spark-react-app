import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
// import GlobalStyles from './styles/globalStyles';

import { SidebarRight } from './sidebarRight/sidebarRight';
import { Profile } from './containers/profile';
import { Home } from './containers/home';
import { Explore } from './containers/explore';
import { Notifications } from './containers/notifications';
import { Create } from './containers/create';
import { Clouds } from './containers/clouds';

function App() {
  return (
    <Router>
      <div className="App">
        <SidebarRight/>
        <Switch>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/" exact component={Home}/>
          <Route path="/explore" exact component={Explore}/>
          <Route path="/notifications" exact component={Notifications}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/clouds" exact component={Clouds}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
