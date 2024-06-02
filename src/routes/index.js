import React from 'react'
import {createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';

const routes=[
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    }
]

const routers=createBrowserRouter(routes)


export default routers