import React from 'react';
import { Provider } from 'react-redux';

import AppStore from '../store/appStore';
import AuthContainer from '../containers/AuthContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const ChatApp = (props) => (
  <Provider store={AppStore(props)}>
    <AuthContainer />
  </Provider>
);

export default ChatApp;
