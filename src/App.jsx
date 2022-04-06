import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'

import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import Editpost from "./pages/Editpost";
import LoginPage from "./pages/Loginpage";
import RequireAuth from './hoc/RequireAuth'
import {AuthProvider} from './hoc/AuthProvider'

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout /> }>
                    <Route index element={<HomePage/>}/>
                    <Route path='about/*' element={<AboutPage/>}/>
                    <Route path='about-us' element={<Navigate to="/about" replace/>}/>
                    <Route path='posts' element={<BlogPage/>}/>
                    <Route path='posts/:id' element={<SinglePage/>}/>
                    <Route path='posts/new' element={
                        <RequireAuth>
                            <CreatePost />
                        </RequireAuth>
                    }/>
                    <Route path='login' element={<LoginPage />}/>
                    <Route path='posts/:id/edit' element={<Editpost />}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
