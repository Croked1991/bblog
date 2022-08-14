import { Navigate } from 'react-router-dom';
import { PostIdPage } from './../pages/PostIdPage';
import { Posts } from './../pages/Posts';
import About from "../pages/About";
import { ErrorPage } from '../pages/ErrorPage';
import Login from '../pages/Login';



export const privateRoutes = [
    {path:"/about", element: About},
    {path:"/posts", element: Posts},
    {path:"/posts/:id", element: PostIdPage},
    {path:"/error", element: ErrorPage},
    {path:"/*", element: ErrorPage},
]

export const publicRoutes = [
    {path:"/login", element: Login},
]