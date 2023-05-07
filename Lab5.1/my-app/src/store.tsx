import {legacy_createStore as createStore} from 'redux'
import { noteReducer } from './noteReducesr'

export const store = createStore(noteReducer)