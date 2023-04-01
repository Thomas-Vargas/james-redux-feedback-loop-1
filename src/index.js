import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

// allData Reducer
const allData = (state = [], action) => {
    if(action.type === 'PUSH_DATA'){

        // POST request here
        return [...state, action.payload];
    }
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
            // POST request
            axios.post('/feedback', action.payload).then(response => {
                console.log('successfully posted feedback to db')
            }).catch(err => {
                console.log(err);
            })
            
            return action.payload
        }
        else if(action.type === 'NEW_FEEDBACK'){
            return action.payload;
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
