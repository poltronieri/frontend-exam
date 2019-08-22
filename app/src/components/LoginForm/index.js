import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

export default function LoginForm() {
  return (
		<form>
			{/* <input type="text" name="email" className="question" id="email" /> */}
      {/* https://codepen.io/atunnecliffe/pen/gpKzQw */}
      <input type="text" name="name" className="question" id="nme" autoComplete="off" />
      <label htmlFor="nme"><span>What's your name?</span></label>

      {/* <label for="email"><span>Email</span></label> */}

    
			<input type="password" placeholder="Password" />
			<Link to="/list">
				<button type="button">
					LOGIN
				</button>
			</Link>
		</form>
  );
}
