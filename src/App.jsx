import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'

import {Routes, Route, Link} from 'react-router-dom'
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout /> }>
                    <Route index element={<HomePage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='posts' element={<BlogPage/>}/>
                    <Route path='posts/:id' element={<SinglePage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
