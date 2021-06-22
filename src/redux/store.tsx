import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { formReducer } from './formReducer';
import thunk from "redux-thunk";
const middleware = [thunk];
export const store = createStore(formReducer, composeWithDevTools(applyMiddleware(...middleware)))