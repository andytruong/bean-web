import React from 'react';
import { Page } from '../../components/page';

export function Login() {
	return (
		<Page>
			<h1>Login form…</h1>

			<form>
				<div>
					<input type="text" name="username" />
				</div>
				<div>
					<input type="password" name="password" />
				</div>

				<div>
					<input type="submit" value={'Login'} />
				</div>
			</form>
		</Page>
	);
}
