import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  goodsReducer,
  roomsReducer,
  catalogSortingReducer,
  getIdeasFilteringReducer,
  loginReducer,
} from './reducers';
import { changeLanguageReducer } from './reducers/changeLanguageReducer';

const rootReducer = combineReducers({
  goodsReducer,
  roomsReducer,
  catalogSortingReducer,
  loginReducer,
  getIdeasFilteringReducer,
  changeLanguageReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
