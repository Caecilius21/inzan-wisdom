import {useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import AuthContext from 'context/AuthContext';

const PublicRoute = ({children}) => {
    let {user} = useContext(AuthContext);

    return (
        !user ? children : <Navigate repalce tp="/" />
    )
}

export default PublicRoute;