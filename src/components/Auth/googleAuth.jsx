import React, {useState} from 'react'
// import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import GoogleLogin from "react-google-login";

// import Home from '../pages/Home';

const GoogleAuth = () => {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [url, setUrl] = useState();
  const [isSignedUp, setIsSignedUp] = useState("false");

  const responseGoogle = (response) =>{
    console.log(response)
    // setName(response.profileObj.name)
    // setEmail(response.profileObj.email)
    // setUrl(response.profileObj.imageUrl)
    axios({
       method: 'POST',
       url:'http://localhost:8080/api/googlelogin',
       data: {idToken: response.tokenId}
    })
    .then(response =>{
       console.log('Google SignIn Success',response);
       setIsSignedUp("true");
    })
    .catch(error =>{
       console.log('Google SignIn Error',  error.response)
       setIsSignedUp("false");
      })
  }
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <h1>Login With Google</h1>
          <h5>Welcome: {name}</h5>
          <h5>Email: {email}</h5>
          <img src={url} alt={name} />
        </div> */}
        
         {/* <Router> */}
           {/* { isSignedUp ?<Redirect to="/home" /> : ""} */}
        {/* </Router>  */}
      
        <GoogleLogin
          clientId="1028936227097-nqg74um6car90q3u5ibuge5fg6sl7om2.apps.googleusercontent.com"
          buttonText="SignIn with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> 
      </>
   )
}

export default GoogleAuth
