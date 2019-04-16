import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export const middlewares = [thunk]
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore) 
export const store = createStoreWithMiddleware(reducers,reduxDevTools)