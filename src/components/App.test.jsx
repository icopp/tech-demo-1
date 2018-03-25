import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

import App from './App'
import { initialState } from '../store'

let store = mockStore(initialState)

beforeEach(() => {
  store = mockStore(initialState)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
