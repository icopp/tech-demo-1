import * as React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'

import DataColumn from './DataColumn'
import Flex from './Flex'

/**
 * @type {React.StatelessComponent<{
    tables: {
      [tableKey: string]: {
        n: number,
        x: number,
        m: number,
        w: number,
        d: 'LTR-UP' | 'RTL-UP',
        hideBelowWidth?: number
      }
    }
  }>}
 */
export const DataColumnsImpl = ({ tables }) => {
  const tableKeys = Object.keys(tables)

  return (
    <Flex>
      {tableKeys.map(tableKey => (
        <DataColumn key={tableKey} tableKey={tableKey} />
      ))}
    </Flex>
  )
}

export default compose(
  connect(state => ({
    tables: state.tables
  })),
  setDisplayName('DataColumns')
)(DataColumnsImpl)
