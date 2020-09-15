import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import reducers from './reducers'
import { Home } from './container'
import logger from 'redux-logger'


const configStore = () => {
  const middleware = [logger]
  const enhancer = compose(applyMiddleware(...middleware))
  return createStore(reducers, enhancer)
}

const store = configStore()

const App = () => (
  <Provider store={store}>
    <Home/>
  </Provider>
)

export default App