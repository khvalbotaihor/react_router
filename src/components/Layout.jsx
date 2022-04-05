import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import {CustomLink} from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about" s>About</CustomLink>
            </header>
            <main className="container">
                <Outlet />
            </main>

            <footer className="container">2021</footer>
        </>
    );
};

export default Layout;
