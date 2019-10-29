import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counterReducer'

import './index.css'
import App from './App'

const reducers = combineReducers({
  counter: counterReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
, document.getElementById('root'))
