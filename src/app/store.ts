import { history } from 'utils/history';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import createSagaMiddleware from '@redux-saga/core';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import AuthReducer from 'features/auth/authSlice';
//create saga Middleware
const sagaMiddleware = createSagaMiddleware();
//
const rootReducer = combineReducers({
  //connected router react
  router: connectRouter(history),
  //all reducer
  auth: AuthReducer,
});
//config store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

//run saga
sagaMiddleware.run(rootSaga);
//dispatch
export type AppDispatch = typeof store.dispatch;
//state
export type RootState = ReturnType<typeof store.getState>;
