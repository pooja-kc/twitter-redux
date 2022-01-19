import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
import { reducer2, currentUser } from './reducer';


const store = createStore(combineReducers({reducer, reducer2, currentUser}));

export default store;
