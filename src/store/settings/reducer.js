import * as redux from 'redux'
import { handleActions } from 'redux-actions'

import {
  hideConfigure,
  showConfigure,
  setCurrentTableOptions,
  clearCurrentTableOptions
} from './action-creators'

/**
 * @typedef TableOptions
 * @property {number} n
 * @property {number} x
 * @property {number} m
 * @property {number} w
 * @property {'LTR-UP' | 'RTL-UP'} d
 * @property {number | null} hideBelowWidth
 */

/**
 * @typedef {Object} State
 * @property {string | null} configureShownFor
 * @property {TableOptions | null} currentTableOptions
 */

/** @type {State} */
export const initialState = {
  configureShownFor: null,
  currentTableOptions: null
}

// `handleActions` is a convenient shorthand for the usual switch/case/default.
/**
 * @type redux.Reducer<State['configureShownFor']>
 */
const configureShownFor = handleActions(
  {
    [showConfigure]: (_, action) => action.payload,
    [hideConfigure]: () => null
  },
  initialState.configureShownFor
)

// `handleActions` is a convenient shorthand for the usual switch/case/default.
/**
 * @type redux.Reducer<State['currentTableOptions']>
 */
const currentTableOptions = handleActions(
  {
    [setCurrentTableOptions]: (_, action) => action.payload,
    [clearCurrentTableOptions]: () => null
  },
  initialState.currentTableOptions
)

/**
 * @type redux.Reducer<State>
 */
const reducer = redux.combineReducers({
  configureShownFor,
  currentTableOptions
})

export default reducer
