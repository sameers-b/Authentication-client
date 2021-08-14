import React from 'react'
import {  Route,  Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth.jsx'
import SignUp from './components/Auth/signUp.jsx'
import Login from './components/Auth/login.jsx'
import StepForm from './components/Auth/stepForm.jsx'

const App = () => {
  return (
    <>
      <Switch>
      <Route path='/' exact component={Auth}/>
      <Route path='/signup' exact component={ SignUp }/>
      <Route path='/login' exact component={Login}/>
      <Route path='/resetPassword' exact component={StepForm} />
    </Switch>
    </>
  )
}

export default App
