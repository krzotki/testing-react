import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/button';
import Input from './components/input/input';
import Posts from './components/posts/posts';
import AppContextProvider from './store/AppContext';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App() {

  return (
    <AppContextProvider>
        <Button text='Click me' />
        <Input />
        <Posts />
        
    </AppContextProvider>
  );
}

export default App;
