import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page not found. <Link to="/">Go Home</Link></h1>
        </div>
    );
};

export default NotFoundPage;
