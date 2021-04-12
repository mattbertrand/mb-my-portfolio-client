import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import projectsReducer from './reducers/projectsReducer'
import blogsReducer from './reducers/blogsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  projects: projectsReducer,
  blogs: blogsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
