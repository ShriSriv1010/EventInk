import React from 'react'
import Loginpage from './LoginPage';
import Register from './register';


function LoginCheck() {
    var isLogin = true;
  return (
    isLogin ? <Loginpage /> : <Register />
  )
}

export default LoginCheck