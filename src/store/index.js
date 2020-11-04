import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import ENV from "environment";

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (ENV.isDevelopment) {
  //for enabling redux devtools extension
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

function configureStore(initialState) {
  const middlewares = [sagaMiddleware];
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore();
