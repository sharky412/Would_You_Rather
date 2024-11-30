import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(process.env.NODE_ENV !== 'production'){
    window.store = store;
}

export default store;