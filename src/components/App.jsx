import * as React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'

import Configure from './Configure'
import DataColumns from './DataColumns'

/**
 * @type {React.StatelessComponent<{
    configureShownFor: string | null
  }>}
 */
export const AppImpl = ({ configureShownFor }) => (
  <React.Fragment>
    <DataColumns />
    {configureShownFor && <Configure tableKey={configureShownFor} />}
  </React.Fragment>
)

export default compose(
  connect(state => ({
    configureShownFor: state.settings.configureShownFor
  })),
  setDisplayName('App')
)(AppImpl)
