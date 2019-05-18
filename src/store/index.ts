import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';


const enhancer = composeWithDevTools(applyMiddleware(thunk));

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);
  return store;
};

export default configureStore;





