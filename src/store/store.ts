import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducer.root';
import { routerMiddleware } from 'connected-react-router';
import { history } from './history';

// @see https://github.com/supasate/connected-react-router/tree/v6.8.0/examples/typescript

export const configureStore = (preloadedState?: any) => {
	const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	
	return createStore(
		rootReducer,
		preloadedState,
		composeEnhancer(
			applyMiddleware(
				routerMiddleware(history),
			),
		),
	);
};
