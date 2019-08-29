import React from 'react';

import LoginForm from '../../components/LoginForm'
import Logo from '../../components/Logo'
// import { Container } from './styles';

export default function LoginPage() {
  return (
    <div className="login-container">
      <Logo />
      <LoginForm />
    </div>
  );
}
