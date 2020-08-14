import React from 'react';

export function Login() {
	return (
		<>
			<h1>Login form…</h1>
			
			<form>
				<div>
					<input type="text" name="username"/>
				</div>
				<div>
					<input type="password" name="password"/>
				</div>
				
				<div>
					<input type="submit" value={'Login'}/>
				</div>
			</form>
		</>
	);
}
