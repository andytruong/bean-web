import { combineReducers } from 'redux';
import { history } from './history';
import { connectRouter } from 'connected-react-router';

// @see https://github.com/supasate/connected-react-router/tree/v6.8.0

export const rootResolver = combineReducers({
	router: connectRouter(history),
});
