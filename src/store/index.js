import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;

//  a third-party extension point between dispatching an action, and the moment it reaches the reducer. 
// People use Redux middleware for logging, crash reporting, talking to an asynchronous API