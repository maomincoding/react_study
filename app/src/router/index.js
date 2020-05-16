import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import routes from './routes'

const RouteWithSubRoutes = route => {
    return (
        <Provider store = {store}> 
        <Router>     
        <Route
            exact
            path={route.path}
            render={props => {
                document.title = route.title || "默认title";
                return <route.component {...props} routes={route.routes}></route.component>
            }}
        />
        </Router>
        </Provider>
    );
};
const router = () => {
    return (
                routes.map((route, i) => {
                    return <RouteWithSubRoutes key={i} {...route} />
                })
    )
   
};
export default router

