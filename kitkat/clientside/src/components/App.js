import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../state-management/store'; 

import Header from './layout/Header';
import Dashboard from './users/Dashboard';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Fragment>
                        <Header />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));