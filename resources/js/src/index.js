import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import Layout from "./containers/App/Layout";
import configureStore from './store/configureStore';

const store = configureStore(window.__INITIAL_STATE_);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, document.getElementById('app'));
