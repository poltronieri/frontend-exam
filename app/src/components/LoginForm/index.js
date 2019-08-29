import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

export default function LoginForm() {
  return (
		<form>
			<input type="text" name="email" placeholder="Email"/>
			<input type="password" name="passwd" placeholder="Password" />
			<Link to="/list">
				<button type="button">
					LOGIN
				</button>
			</Link>
		</form>
  );
}
