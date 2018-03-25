import * as reduxActions from 'redux-actions'

import ActionType from '../action-type'

/**
 * @typedef TableOptions
 * @property {number} n
 * @property {number} x
 * @property {number} m
 * @property {number} w
 * @property {'LTR-UP' | 'RTL-UP'} d
 * @property {number | null} hideBelowWidth
 */

// We use createAction despite it just being an identity function because it has
// other useful helper properties, like a `toString` of the action type (so the
// action creator can then be directly used in reducers).
/**
 * @type reduxActions.Action<{tableKey: string, tableOptions: TableOptions}>
 */
const setTableOptions = reduxActions.createAction(ActionType.SetTableOptions)

export default setTableOptions
