
import React, {useContext} from 'react';

import {AppContext} from '../../store/AppContext';

const Posts: React.FC = () => {
    const context = useContext(AppContext);

    return(
        <ul data-testid="allPosts">
            {context.posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default Posts;