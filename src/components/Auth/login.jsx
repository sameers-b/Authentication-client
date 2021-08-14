import './Style/login-style.css'
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Login = (history) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

//   useEffect(() => {
//    if (localStorage.getItem("authToken")) {
//      history.push("/");
//    }
//  }, [history]);

  const loginHandler = async (e) => {
   e.preventDefault();
   

   try {
    //  const { data } = await
      axios({
      method: 'POST',
      url:'http://localhost:8080/api/login',
      data:
      {
         mobile,
         password,
       }
   })
    //  localStorage.setItem("authToken", data.token);

    //  history.push("/");
   } catch (error) {
     setError('error.response.data.error');
     setTimeout(() => {
       setError("");
     }, 5000);
   }
   setMobile("");
   setPassword("");
 };

   return (
      <>
        <div className="login-container">
           <p className="head">Login Up</p>
           <form method="post" action="" onSubmit={loginHandler}>
           {error && <span className="error-message">{error}</span>}
           <div className="login-mobile input-box">
             <label for="mobile">Mobile :-</label>
             <input
              type="text"
              name="mobile"
              required
              id="mobile"
              placeholder="Mobile no."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
             />
           </div>
           <div className="login-pass input-box">
              <label for="password">Password :-</label>
              <input
                type="password"
                required
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />  
           </div>
           <div className="footer">
              <button type="submit" className="submit-btn">Click Me</button>
           </div>
           <div className="fargotPass">
               <Link to="resetPassword" >fargot password</Link>
           </div>
           </form>           
         </div>
      </>
   )
}

export default Login
