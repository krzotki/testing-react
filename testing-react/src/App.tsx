import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/button';
import Input from './components/input/input';
import Posts from './components/posts/posts';
import AppContextProvider from './store/AppContext';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import UserProfile from './components/userProfile/userProfile';

function App() {

  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route path="/" exact>
            <div className={styles.grid_container || ""}>
              <div className={styles.header || ""}>
                <h3>Hello there.</h3>
              </div>
              <Input />
              <div className={styles.button}>
                <Button text='Click me' />
              </div>
              <Posts />
            </div>
          </Route>
          <Route path="/user/:id" exact>
            <UserProfile />
          </Route>

        </Switch>

      </AppContextProvider>
    </Router>
  );
}

export default App;
