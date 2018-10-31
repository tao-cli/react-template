import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './redux/reducer';
import { BrowserRouter,Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import './index.css';
import App from '@/app/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
ReactDOM.render(<Provider store={store}><BrowserRouter>
    <App />
  </BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
