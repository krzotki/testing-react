
import React, {useContext} from 'react';

import {AppContext} from '../../store/AppContext';
import PostItem from '../postItem/postItem';
import styles from './posts.module.css';

const Posts: React.FC = () => {
    const context = useContext(AppContext);

    return(
        <ul data-testid="allPosts" className={styles.posts}>
            {context.posts.map(post => (
                <PostItem key={post.id} post={post}/>
            ))}
        </ul>
    );
};

export default Posts;