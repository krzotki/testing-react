
import React, {useContext} from 'react';

import {AppContext} from '../../store/AppContext';
import PostItem from '../postItem/postItem';

const Posts: React.FC = () => {
    const context = useContext(AppContext);

    return(
        <ul data-testid="allPosts">
            {context.posts.map(post => (
                <PostItem key={post.id} post={post}/>
            ))}
        </ul>
    );
};

export default Posts;