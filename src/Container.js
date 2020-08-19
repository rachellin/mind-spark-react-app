import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import './App.css';

import SidebarRight from './sidebarRight/sidebarRight';
import Header from './header/header';
import SidebarLeft from './sidebarLeft/sidebarLeft';

import { Profile } from './containers/profile';
import { Home } from './containers/home';
import { Explore } from './containers/explore';
import { Notifications } from './containers/notifications';
import { Create } from './containers/create';
import { Clouds } from './containers/clouds';

function Container () {

  return (
    <>
        <Header/>
        {/* <SidebarLeft/> */}
        <SidebarRight/>
        <Switch>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/" exact component={Home}/>
            <Route path="/explore" exact component={Explore}/>
            <Route path="/notifications" exact component={Notifications}/>
            <Route path="/create" exact component={Create}/>
            <Route path="/clouds" exact component={Clouds}/>
        </Switch>
    </>
  );
}

export default Container;