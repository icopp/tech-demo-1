import { handleActions } from 'redux-actions'

import { setTableOptions } from './action-creators'

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
 * @typedef {Object.<string, TableOptions>} State
 */

/** @type {State} */
export const initialState = {
  RED: {
    n: 8,
    x: 1,
    m: 29,
    w: 20,
    d: 'LTR-UP',
    hideBelowWidth: null
  },
  GREEN: {
    n: 231,
    x: 1,
    m: 247,
    w: 30,
    d: 'LTR-UP',
    hideBelowWidth: null
  },
  BLUE: {
    n: 47,
    x: 2,
    m: 81,
    w: 40,
    d: 'RTL-UP',
    hideBelowWidth: 60
  }
}

/**
 * @typedef TableOptionsPayload
 * @property {string} tableKey
 * @property {TableOptions} tableOptions
 */

// `handleActions` is a convenient shorthand for the usual switch/case/default.
/**
 * @type import('redux').Reducer<State>
 */
const reducer = handleActions(
  {
    [setTableOptions]:
      /**
       * @param {State} state
       * @param {Object} action
       * @param {TableOptionsPayload} action.payload
       */
      (state, action) => ({
        ...state,
        [action.payload.tableKey]: {
          n: action.payload.tableOptions.n,
          x: action.payload.tableOptions.x,
          m: action.payload.tableOptions.m,
          w: action.payload.tableOptions.w,
          d: action.payload.tableOptions.d
        }
      })
  },
  initialState
)

export default reducer
