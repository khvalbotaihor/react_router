import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'

import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/posts">Blog</a>
        <a href="/about">About</a>
      </header>
        <Routes>
            <Route path='/' element={<HomePage /> }/>
            <Route path='/about' element={<AboutPage /> }/>
            <Route path='/posts' element={<BlogPage /> }/>
            <Route path='*' element={<NotFoundPage /> }/>
        </Routes>
    </>
  );
}

export default App;
