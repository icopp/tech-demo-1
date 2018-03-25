import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { injectGlobal } from 'styled-components'

import App from './components/App'
import store, { persistor } from './store'

injectGlobal`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor} loading={<p>Please wait, loading...</p>}>
      <App />
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
)
