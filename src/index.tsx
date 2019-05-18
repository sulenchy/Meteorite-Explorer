import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/index';
import {initialState} from './reducers/itemReducer'
import {App} from './components/app';
import './styles/style.scss';

const store = configureStore()
const ROOT = document.querySelector(".container");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    ROOT
);