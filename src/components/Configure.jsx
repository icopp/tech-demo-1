import * as React from 'react'
import * as reactRedux from 'react-redux'
import {
  branch,
  compose,
  renderNothing,
  setDisplayName,
  withPropsOnChange
} from 'recompose'
import styled from 'styled-components'

import Button from './Button'
import {
  hideConfigure,
  clearCurrentTableOptions,
  setCurrentTableOptions
} from '../store/settings'
import { setTableOptions } from '../store/tables'

const ConfigureBox = styled.div`
  background-color: #f0f0f0;
  font-size: 1.25em;
  margin: 1em;
  padding: 0.5em;
  width: 30em;

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 30em) {
    width: auto;
  }
`

export const ConfigureInput = styled.input`
  font-size: 0.75em;
  padding: 0.5em;
  width: 15em;
`

export const ConfigureSelect = ConfigureInput.withComponent('select')

/**
 * @type {React.StatelessComponent<{
    currentTableOptions: {
      n: number,
      x: number,
      m: number,
      w: number,
      d: 'LTR-UP' | 'RTL-UP',
      hideBelowWidth?: number
    } | null,
    dispatch: reactRedux.Dispatch<any>,
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
export const ConfigureImpl = ({
  currentTableOptions,
  dispatch,
  tableData,
  tableKey
}) => {
  const TableLabel = styled.span`
    font-weight: bold;
    color: ${tableKey.toLowerCase()};
  `

  return (
    <ConfigureBox>
      <p>
        Table: <TableLabel>{tableKey}</TableLabel>
      </p>
      <p>
        <label>N =</label>{' '}
        <ConfigureInput
          type="number"
          min={0}
          step={1}
          value={currentTableOptions ? currentTableOptions.n : tableData.n}
          onChange={({ currentTarget: { valueAsNumber } }) => {
            dispatch(
              setCurrentTableOptions({
                n: valueAsNumber,
                x: (currentTableOptions || tableData).x,
                m: (currentTableOptions || tableData).m,
                w: (currentTableOptions || tableData).w,
                d: (currentTableOptions || tableData).d
              })
            )
          }}
        />
      </p>
      <p>
        <label>X =</label>{' '}
        <ConfigureInput
          type="number"
          min={0}
          step={1}
          value={currentTableOptions ? currentTableOptions.x : tableData.x}
          onChange={({ currentTarget: { valueAsNumber } }) => {
            dispatch(
              setCurrentTableOptions({
                n: (currentTableOptions || tableData).n,
                x: valueAsNumber,
                m: (currentTableOptions || tableData).m,
                w: (currentTableOptions || tableData).w,
                d: (currentTableOptions || tableData).d
              })
            )
          }}
        />
      </p>
      <p>
        <label>M =</label>{' '}
        <ConfigureInput
          type="number"
          min={0}
          step={1}
          value={currentTableOptions ? currentTableOptions.m : tableData.m}
          onChange={({ currentTarget: { valueAsNumber } }) => {
            dispatch(
              setCurrentTableOptions({
                n: (currentTableOptions || tableData).n,
                x: (currentTableOptions || tableData).x,
                m: valueAsNumber,
                w: (currentTableOptions || tableData).w,
                d: (currentTableOptions || tableData).d
              })
            )
          }}
        />
      </p>
      <p>
        <label>W =</label>{' '}
        <ConfigureInput
          type="number"
          min={0}
          max={100}
          step={1}
          value={currentTableOptions ? currentTableOptions.w : tableData.w}
          onChange={({ currentTarget: { valueAsNumber } }) => {
            dispatch(
              setCurrentTableOptions({
                n: (currentTableOptions || tableData).n,
                x: (currentTableOptions || tableData).x,
                m: (currentTableOptions || tableData).m,
                w: valueAsNumber,
                d: (currentTableOptions || tableData).d
              })
            )
          }}
        />
      </p>
      <p>
        <label>D =</label>{' '}
        <ConfigureSelect
          value={currentTableOptions ? currentTableOptions.d : tableData.d}
          onChange={({ currentTarget: { value } }) => {
            dispatch(
              setCurrentTableOptions({
                n: (currentTableOptions || tableData).n,
                x: (currentTableOptions || tableData).x,
                m: (currentTableOptions || tableData).m,
                w: (currentTableOptions || tableData).w,
                d: value
              })
            )
          }}
        >
          <option value="LTR-UP">LTR-UP</option>
          <option value="RTL-UP">RTL-UP</option>
        </ConfigureSelect>
      </p>
      <p>
        <Button
          onClick={() => {
            dispatch(
              setTableOptions({
                tableKey,
                tableOptions: {
                  n: (currentTableOptions || tableData).n,
                  x: (currentTableOptions || tableData).x,
                  m: (currentTableOptions || tableData).m,
                  w: (currentTableOptions || tableData).w,
                  d: (currentTableOptions || tableData).d
                }
              })
            )
            dispatch(hideConfigure())
            dispatch(clearCurrentTableOptions())
          }}
        >
          OK
        </Button>
        <Button
          onClick={() => {
            dispatch(hideConfigure())
            dispatch(clearCurrentTableOptions())
          }}
        >
          CANCEL
        </Button>
      </p>
    </ConfigureBox>
  )
}

export default compose(
  reactRedux.connect(state => ({
    currentTableOptions: state.settings.currentTableOptions,
    tables: state.tables
  })),
  branch(({ tables, tableKey }) => !tables[tableKey], renderNothing()),
  withPropsOnChange(['tables', 'tableKey'], ({ tables, tableKey }) => ({
    tableData: tables[tableKey]
  })),
  setDisplayName('Configure')
)(ConfigureImpl)
