import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';

<<<<<<< HEAD
import App from './App';
import rootReducer from './reducer/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />,
	</Provider>,
=======


import App from './App';
// import rootReducer from './reducer/reducer';

// const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
	// <Provider store={store}>
		<App />,
	// </Provider>,
>>>>>>> 5d7ff7fa1021f95dbe30eabfa23ddaa988223dde
	rootElement,
);


