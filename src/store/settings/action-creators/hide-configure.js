import { createAction } from 'redux-actions'

import ActionType from '../action-type'

// We use createAction despite it just being an identity function because it has
// other useful helper properties, like a `toString` of the action type (so the
// action creator can then be directly used in reducers).
export default createAction(ActionType.HideConfigure)
