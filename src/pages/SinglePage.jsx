import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            <button onClick={goBack}>gO BACK</button>
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    );
};

export default SinglePage;
