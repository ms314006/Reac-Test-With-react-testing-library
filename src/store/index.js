import { createStore } from 'redux';
import reducer from '../reducer/Counter';

const store = createStore(reducer);

export default store;
