import React, {lazy} from 'react';
import {Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

Home = Loadable(lazy(() => import('views/pages/dictionay')));
Dictionary = Loadable(lazy(() => import('views/pages/dictionay')));


export default function ThemeRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}> 
                <Route path="/" element={<Home/>}></Route>
                <Route path="/dictionary/" element={<Dictionary/>}></Route>
            </Route>
        </Routes>
    )
}
