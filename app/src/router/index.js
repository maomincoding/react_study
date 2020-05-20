import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import loadable from '../util/loadable'

const Home = loadable(()=> import('../views/Home/') )
const About = loadable(()=> import('../views/About/') )
const More = loadable(()=> import('../views/More/'))

const APPRouter = () =>(
    <Provider store={store}>
        <Router >
            <div>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/about/:id" component={About}/>
                <Route exact={true} path="/more" component={More} />
            </div>
        </Router>
    </Provider>
);

export default APPRouter
