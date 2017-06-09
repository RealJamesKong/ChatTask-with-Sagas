import { applyMiddleware, createStore } from "redux"

import 'babel-polyfill'
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import createSagaMiddleware from "redux-saga"
import reducer from "./reducers"
import mySaga from "./sagas/index.js"

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(promise(), sagaMiddleware, thunk, logger(), sagaMiddleware)
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(middleware))

sagaMiddleware.run(mySaga);