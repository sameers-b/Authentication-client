import './Style/signup-style.css'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = (history) => {

   const [name, setName] = useState("");
   const [mobile, setMobile] = useState("");
   const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");

   const signupHandler = async (e) => {
      e.preventDefault();
  
      // const config = {
      //   header: {
      //     "Content-Type": "application/json",
      //   },
      // };
  
      if (password !== confirmpassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords do not match");
      }
  
      try {
         //  const { data } =await
           axios({
            method: 'POST',
            url:'http://localhost:8080/api/signup',
            data:
            {
               name,
               mobile,
               password,
             }
         })

      //   localStorage.setItem("authToken", data.token);
  
      //   history.push("/");
      } catch (error) {
        setError('error.response.data.error');
        setTimeout(() => {
          setError("");
        }, 5000);
      }
      setName("");
      setMobile("");
      setPassword("");
      setConfirmPassword("");
    };
  

   return (
      <>
         <div className="signup-container">
           <p className="head">Sign Up</p>
           <form method="post" action="" onSubmit={signupHandler}>
           {error && <span className="error-message">{error}</span>}
           <div className="signup-name input-box">
              <label for="name">Name :-</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required   
               />
           </div>
           <div className="signup-mobile input-box">
             <label for="mobile">Mobile :-</label>
             <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Mobile no."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
             />
           </div>
           <div className="signup-otp input-box">
              <label for="otp">OTP :-</label>
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="otp"
               //  required
              />
              <button>Verify</button>
           </div>
           <div className="signup-pass input-box">
              <label for="password">Password :-</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />  
           </div>
           <div className="signup-con-pass input-box">
              <label for="con-pass">Confirm Password :-</label>
              <input
                 type="password"
                 name="con-pass"
                 id="con-pass"
                 placeholder="Confirm-Password"
                 value={confirmpassword}
                 onChange={(e) =>setConfirmPassword(e.target.value)}
                 required
              />   
           </div>
           <div className="footer">
              <button type="submit" className="submit-btn">Click Me</button>
           </div>
            <span className="signup-screen__subtext">
               Already have an account? <Link to="/login">Login</Link>
            </span>
           </form>           
         </div>
      </>
   )
}

export default SignUp
