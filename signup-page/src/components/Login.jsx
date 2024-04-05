import { useState, useRef } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login(){

    // const[submit,setSubmit] = useState(false)
    const[islogin,setIsLogin] = useState(true)
    const[error,setError] = useState(false)

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const handleSubmit= ()=>{
        const emailData = email.current.value
        const passData = password.current.value
        // console.log(emailData)
        // console.log(passData)

        if (!islogin){
          if(localStorage.getItem(emailData)){
            alert('User already exists')
            setError(true)
            // email.current.style.borderColor = 'red';
          }

          localStorage.setItem(emailData,passData)
          alert('Registered succesfully!!')
          
        }
        else{
          if (localStorage.getItem(emailData)){
            if(localStorage.getItem(emailData) === passData){
              navigate('/products') 
               
              // <Link to='/products'/>
              // <Router>
              //   <Switch>
              //     <Route path="/products"/>
              //   </Switch>
              // </Router>
              // password.current.style.borderColor = 'green'
              // alert('Logged In')
            }
            else{
              alert('Password mismatch')
              setError(true)
              // setError({borderColor:'red'})
              // password.current.style.borderColor = 'red';
            }
          }
          else{alert('User not found')}
        }
        // setSubmit(true)
    }

    return (
        <div className="App">
          <div className='container'>
            <div className="mainHeader">
              <h1>{islogin ? 'LogIn' : 'SignUp'}</h1>
            </div>
                {!islogin && <input type='text' className="input" placeholder='Enter your Name' required/>}
                {!islogin &&<input type='number' className="input" placeholder='Enter your Age'/>}
                <input className="input" type='email' style={{borderColor: error && !islogin &&'red'}} ref={email} placeholder='Enter your email' required/>
                <input className="input" type='password' style={{borderColor: error &&'red'}} ref={password} placeholder='Enter your password' required/>
            <div>
                <button onClick={handleSubmit} className="btn" type='submit'>
                    {islogin ? 'Log In' : 'Sign In'}
                </button>
            </div>
            <div className="message">
                <p>{islogin ? 'Dont have an account?' : 'Already signed up?'}</p>
                <button onClick={()=>setIsLogin(!islogin)}>{islogin ? 'Sign Up' : 'Log In'}</button>   
            </div>
          </div>
        </div>
      );
}