import {combineReducers} from 'redux';
import Login from '../screens/Login/config/reducers';
import Splash from '../screens/Splash/config/reducers';

export default combineReducers({
  Login,
  Splash,
});
