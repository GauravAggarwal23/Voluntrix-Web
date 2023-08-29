import React from 'react'
 import { useContext } from 'react';
import { logo } from './constants'
import {GoogleLogin} from '@react-oauth/google';
 import jwtDecode from 'jwt-decode';
import { AccountContext } from '../context/AccountProvider';

const LoginPage = () => {

  const { setAccount} = useContext(AccountContext);
    const onLoginSuccess = (res)=>{
   const decoded=  jwtDecode(res.credential);
   console.log(decoded);
     setAccount(decoded);
    }
    const onLoginError = (res)=>{
       console.log('login faild', res);
    }

    const cardstyle={
        width : "18rem",
        margin : "5% 40% "
    }
  return (
    <div className="card" style={cardstyle}>
    
    <img src={logo} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Voluntrix</h5>
      <p>Lorem ipsum dolor sit amet,</p>
      <GoogleLogin
        onSuccess={onLoginSuccess}
        onError={onLoginError}
      />
      
    </div>
  </div>
  )
}

export default LoginPage
