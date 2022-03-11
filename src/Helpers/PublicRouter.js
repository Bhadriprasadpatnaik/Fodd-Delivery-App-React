import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContextApi } from './../Apis/AuthContext';

const PublicRouter = ({ children, ...rest }) => {
    let USER = useContext(AuthContextApi);
    return (
        <Route
            {...rest}
            render={props => {
                return USER ? <Redirect to="/userHome/profile" {...props} /> : children;
            }}
        />
    );
};

export default PublicRouter;
