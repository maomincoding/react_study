import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import Home from '../views/Home'
import About from '../views/About'


const APPRouter = () =>(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/about/:id" component={About}/>
            </div>
        </Router>
        </Provider>
);

export default APPRouter
