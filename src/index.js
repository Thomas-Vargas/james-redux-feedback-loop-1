import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// allData Reducer
const allData = (state = [], action) => {
    return state;
}

// userData Reducer
const userData = (
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }, action) => {
        if(action.type === 'SUBMIT_DATA'){
            return {
                feeling: action.payload.feeling,
                understanding: action.payload.understanding,
                support: action.payload.support,
                comments: action.payload.comments
            }
        }
    return state;
}

// feeling Reducer
const feeling = (state=0, action) => {
    if(action.type === 'SET_FEELING'){
        return action.payload;
    }
    return state;
}

// understanding Reducer
const understanding = (state=0, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        return action.payload;
    }
    return state;
}

// support Reducer
const support = (state=0, action) => {
    if(action.type === 'SET_SUPPORT'){
        return action.payload;
    }
    return state;
}

// comments Reducer
const comments = (state='', action) => {
    if(action.type === 'SET_COMMENTS'){
        return action.payload;
    }
    return state;
}

// Create store
const store = createStore(
    combineReducers({
        userData,
        allData,
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
