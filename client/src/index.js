import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-common'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reduers from './store/reducers'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reduers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
