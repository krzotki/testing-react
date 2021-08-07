
import React, {useState, useEffect} from "react";
import Post from '../models/Post';

import { myRequest } from './../http';

interface AppContextObj {
    posts: Post[],
}

export const AppContext = React.createContext<AppContextObj>({
    posts: []
})


const AppContextProvider: React.FC = (props) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        myRequest.then(data => {
            console.log(data)
            setPosts(data)
        });
    }, []);
    
    const contextValue: AppContextObj = {
        posts: posts
    };

    return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
};

export default AppContextProvider;