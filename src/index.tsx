import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { history } from './store/history';
import { configureStore } from './store/store';
import { Route, Switch } from 'react-router';
import { Login } from './pages/login';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<>
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/wip" render={() => (<Login />)} />
					</Switch>
				</>
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
