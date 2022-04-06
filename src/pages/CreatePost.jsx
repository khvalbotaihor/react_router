import React from 'react';
import {useAuth} from "../hook/UseAuth";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create a post</h1>
            <button onClick={() => signout(() => navigate('/', {replace:true}))}>Log Out</button>
        </div>
    );

};

export default CreatePost;
