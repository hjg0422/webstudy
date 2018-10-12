import counter from '../reducer/reducer'
import {createStore} from 'redux';
const store = createStore(counter);

export default store;