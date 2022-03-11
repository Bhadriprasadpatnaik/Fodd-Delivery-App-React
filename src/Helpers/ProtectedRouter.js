import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router'
import { Fragment } from 'react/cjs/react.development';
import { AuthContextApi } from '../Apis/AuthContext'
import Spinner from '../Pages/Spinner/Spinner';

const ProtectedRouter = ({ component: Component, ...parameters }) => {
    let USER = useContext(AuthContextApi);
    return (
        <Route
            {...parameters}
            render={props => {
                return (
                    <Fragment>
                        {USER === null ? (
                            <Spinner />
                        ) : (
                            <Fragment>
                                    {USER ? <Component {...props} /> : <Redirect to="/login" />}
                            </Fragment>
                        )}
                    </Fragment>
                );
            }}
        />
    );
};

export default ProtectedRouter
