/**
 * Redux store module based on the ducks pattern.
 * @see https://github.com/erikras/ducks-modular-redux
 */

// Actions

export { default as ActionType } from './action-type'

// Reducer

export { default, initialState } from './reducer'

// Action Creators

export {
  showConfigure,
  hideConfigure,
  setCurrentTableOptions,
  clearCurrentTableOptions
} from './action-creators'
