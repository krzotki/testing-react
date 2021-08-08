import React from "react";

import User from "../../models/User";

import { Link } from "react-router-dom";

const UserReference: React.FC<{user: User}> = (props) => {

    return (
        <div>
            <Link to={`/user/${props.user.id}`}><strong>{props.user.name}</strong></Link> says:
        </div>
    );
};

export default UserReference;