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
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
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
