import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootSaga from './sagas/rootSagas'
import reducer from './reducer/rootReducer';

const sagaMiddleWare = createSagaMiddleware();

let store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(rootSaga);

export default store;