import React from 'react'
import './Style/Auth-style.css'
import {Link} from 'react-router-dom'

import GoogleAuth from "./googleAuth"

const Auth = () => {

   return (
      <>
         <div className="auth-container">
            <div className="google-auth-btn">
               <GoogleAuth />
            </div>

            <div className="signup-btn auth-btn">
               <Link to="/signUp">
                 <span>Sign up</span>
               </Link>
            </div>

            <div className="login-btn auth-btn">
               <Link to="/login">
                 <span>Login</span>
               </Link>
            </div>
         </div>
      </>
   )
}

export default Auth
