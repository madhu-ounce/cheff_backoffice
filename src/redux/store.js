import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './reducers/loginReducer';
import categoryReducer from './reducers/categoryReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers(
    {
        catList : categoryReducer,
        logInfo : loginReducer
    })

const store = createStore(rootReducer, applyMiddleware(thunk, logger)) 
export default store;