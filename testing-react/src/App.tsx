import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/button';
import Input from './components/input/input';
import Posts from './components/posts/posts';
import AppContextProvider from './store/AppContext';
import styles from './App.module.css';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App() {

  return (
    <AppContextProvider>
      <div className={styles.grid_container || ""}>
        <div className={styles.header || ""}>
          <h3>Hello there</h3>
        </div>
        <Input />
        <div className={styles.button}>
          <Button text='Click me' />
        </div>
        <Posts />
       </div> 
    </AppContextProvider>
  );
}

export default App;
