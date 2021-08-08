
import React, {useState, useEffect} from "react";
import Post from '../models/Post';
import User from '../models/User';

import { myRequest, usersRequest } from './../http';

interface AppContextObj {
    posts: Post[],
    users: User[],
    getUser: (userId: number) => User | undefined
}

export const AppContext = React.createContext<AppContextObj>({
    posts: [],
    users: [],
    getUser: (userId: number) => undefined,
})


const AppContextProvider: React.FC = (props) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    const getUserHandler = (userId: number) => {
        return users.find(user => user.id === userId);
    };
    
    useEffect(() => {
        myRequest.then(data => {
            console.log(data)
            setPosts(data)
        });

        usersRequest.then(data => {
            console.log(data);
            setUsers(data);
        });

    }, []);
    
    const contextValue: AppContextObj = {
        posts: posts,
        users: users,
        getUser: getUserHandler
    };

    return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
};

export default AppContextProvider;