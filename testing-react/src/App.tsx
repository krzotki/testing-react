import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/button';
import Input from './components/input/input';

import { myRequest } from './http';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App() {

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    myRequest.then(data => {
      console.log(data)
      setPost(data)
    });
  }, []);

  return (
    <div className="App">
        <Button text='Click me' />
        <Input />
        
        {post && (
          <div data-testid="myPost">
            {post.body}
          </div>
        )}
    </div>
  );
}

export default App;
