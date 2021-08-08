import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { AppContext } from "../../store/AppContext"; 

const UserProfile:React.FC = (props) => {
    const params = useParams<{id: string}>();

    const context = useContext(AppContext);
    const user = context.getUser(Number(params.id));

    return (
        <>
            {user && (
                <div title={"user_profile"}>
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                    <p>{user.address.city}</p>
                </div>       
            )}
        </>
    );
};

export default UserProfile;