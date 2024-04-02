import { useState } from "react";

export function Login(){
    const[submit,setSubmit] = useState(false)
    const[islogin,setIsLogin] = useState(true)

    // const handleEmail = (e)=>{
    //     setEmail(e.target.value)
    //     // console.log(email);
    //     // console.log(e.target.value)
    // }

    // const handlePassword = (e)=>{
    //     setPassword(e.target.value)
    // }

    const handleSubmit= (e)=>{
        setSubmit(true)
        alert('Success')
        console.log('submitted')
    }

    return (
        <div className="App">
          <div className='container'>
            <div className="mainHeader">
              <h1>{islogin ? 'LogIn Page' : 'SignUp Page'}</h1>
            </div>
                {!islogin &&<input type='text' className="input" placeholder='Enter your Name'/>}
                {!islogin &&<input type='number' className="input" placeholder='Enter your Age'/>}
              <input className="input" type='email' placeholder='Enter your email'/>
              <input className="input" type='password' placeholder='Enter your password'/>
            <div>
                <button onClick={handleSubmit} className="btn" type='submit' value={submit}>
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