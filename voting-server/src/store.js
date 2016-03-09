// src/store.js

import {createStore} from 'redux';
import reducer from './reducer';
import {Map, List} from 'immutable';

export default function makeStore() {
    return createStore(reducer);
}
