import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducers } from "./reducers/root-reducers";
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export type rootStore =  ReturnType<typeof  rootReducers>

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))