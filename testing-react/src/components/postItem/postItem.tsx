import React, {useContext, useEffect, useState} from 'react';
import Post from '../../models/Post';

import UserReference from './../userReference/userReference';

import User from '../../models/User';

import  {AppContext} from '../../store/AppContext';

import { toLower, toUpper } from '../../Helpers/HelperFunctions';

const PostItem: React.FC<{post: Post}> = (props) => {
    const context = useContext(AppContext);
    const user = context.getUser(props.post.userId);

    return (
        <li data-postid={props.post.id}>
            <h3 data-posttitle={props.post.title}>{toUpper(props.post.title)}</h3>
            {user && <UserReference user={user}/>}
            <span data-postbody={props.post.body}>{props.post.body}</span>
        </li>
    );
};

export default PostItem;