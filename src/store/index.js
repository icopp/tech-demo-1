import { createStore, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import settings, { initialState as settingsInitialState } from './settings'
import tables, { initialState as tablesInitialState } from './tables'

export const initialState = {
  settings: settingsInitialState,
  tables: tablesInitialState
}

const reducer = persistCombineReducers(
  {
    key: 'tech-demo-1',
    storage
  },
  {
    settings,
    tables
  }
)

const enhancers = [
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
].filter(Boolean)

const store = createStore(reducer, compose(...enhancers))
export const persistor = persistStore(store)
export default store
