import ReactOnRails from 'react-on-rails';

import ChatApp from '../bundles/Chat/startup/ChatApp';
import Auth from '../bundles/Chat/components/Auth'
import LogIn from '../bundles/Chat/components/LogIn'
import SignUp from '../bundles/Chat/components/SignUp'
import AppStore from '../bundles/Chat/store/appStore';

ReactOnRails.registerStore({ AppStore });

ReactOnRails.register({
  ChatApp,
  Auth,
  LogIn,
  SignUp,
});
