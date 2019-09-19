import { combineReducers } from 'redux';
import devices from '../ducks/devices';
import filters from '../ducks/filters';


export default combineReducers({
  devices,
  filters
});
