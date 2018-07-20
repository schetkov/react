import { createStore } from 'redux';
import authReducer from '../reducers/authReducer';

const AppStore = (railsProps) => (
  createStore(authReducer, railsProps, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
);

export default AppStore;
