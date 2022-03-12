import { 
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import {
    composeWithDevTools
 } from 'redux-devtools-extension';

 import thunk from 'redux-thunk';
 
 import blogReducer from './Reducers/blogReducer';
 

 const Reducers = combineReducers({
     blogs: blogReducer
 })

 const middleware = [thunk];
 const store = createStore(
     Reducers,
     composeWithDevTools(applyMiddleware(...middleware))
 )

 export default store;