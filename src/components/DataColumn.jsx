import * as React from 'react'
import { connect } from 'react-redux'
import {
  branch,
  compose,
  renderNothing,
  setDisplayName,
  withPropsOnChange
} from 'recompose'
import styled from 'styled-components'

import Button from './Button'
import DataTable from './DataTable'
import Flex from './Flex'

import {
  hideConfigure,
  showConfigure,
  clearCurrentTableOptions
} from '../store/settings'

const Column = styled.div`
  flex: 1 1 auto;
  margin: 1em;

  @media (max-width: 40em) {
    width: 100%;
  }
`

const Wrapper = styled.div`
  padding: 10px;
  border: 2px solid black;
`

const FlexBox = styled.div`
  flex: 1 1 auto;
`

/**
 * @type {React.StatelessComponent<{
    configureShownFor: string | null,
    dispatch: redux.Dispatch<any>,
    tableData: {
      n: number,
      x: number,
      m: number,
      w: number,
      d: 'LTR-UP' | 'RTL-UP',
      hideBelowWidth?: number
    },
    tableKey: string
  }>}
 */
export const DataColumnImpl = ({
  configureShownFor,
  dispatch,
  tableData,
  tableKey
}) => {
  let ThisColumn = Column.extend`
    width: ${tableData.w};
  `

  if (tableData.hideBelowWidth !== null) {
    ThisColumn = ThisColumn.extend`
      @media (max-width: ${tableData.hideBelowWidth}em) {
        display: none;
      }
    `
  }

  const ThisWrapper = Wrapper.extend`
    border-color: ${tableKey.toLowerCase()};
  `

  return (
    <ThisColumn>
      <ThisWrapper>
        <DataTable tableKey={tableKey} />
        <Flex style={{ marginTop: '1em' }}>
          <FlexBox>
            <Button
              onClick={() => {
                dispatch(clearCurrentTableOptions())

                if (configureShownFor && configureShownFor === tableKey) {
                  dispatch(hideConfigure())
                  return
                }

                dispatch(showConfigure(tableKey))
              }}
            >
              Configure
            </Button>
          </FlexBox>
          <FlexBox style={{ textAlign: 'right' }}>{tableData.w}%</FlexBox>
        </Flex>
      </ThisWrapper>
    </ThisColumn>
  )
}

export default compose(
  connect(state => ({
    configureShownFor: state.settings.configureShownFor,
    tables: state.tables
  })),
  branch(
    ({ tables, tableKey }) => !tableKey || !tables[tableKey],
    renderNothing()
  ),
  withPropsOnChange(['tables', 'tableKey'], ({ tables, tableKey }) => ({
    tableData: tables[tableKey]
  })),
  setDisplayName('DataColumn')
)(DataColumnImpl)
