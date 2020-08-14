import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export function Page(props: any) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<span className="App-siteName">Bean Web interface</span>
			</header>

			<div className="App-body">
				{props.children}
			</div>

			<div className="App-footer">
				FOOTER
			</div>
		</div>
	);
}
