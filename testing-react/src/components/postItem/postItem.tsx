import React from 'react';
import Post from '../../models/Post';


const PostItem: React.FC<{post: Post}> = (props) => {

    return (
        <li data-postid={props.post.id}>
            <h3 data-posttitle={props.post.title}>{props.post.title}</h3>
            <span data-postbody={props.post.body}>{props.post.body}</span>
        </li>
    );
};

export default PostItem;