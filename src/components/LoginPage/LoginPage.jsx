import React, { useState } from 'react'
import './LoginPage.css'
export default function Loginpage() {
    document.title='EventInk login';
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setallEntry] = useState([])
 
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email:email,password:password};
        setallEntry([...allEntry,newEntry]);
        console.log(allEntry);
        setEmail("");
        setPassword("");

    }
  return (
    <div>
        <div className="logo"><img src={require('./logo.png')} alt="cant load"/></div>
       <div className="loginBox">
            
       <div className="login-form-bd">
        <div className="form-wrapper">
          <div className="form-container">
            <h1> Please Login</h1>
            <form onSubmit={submitForm}>
              <div className="form-control">
            
                <input type="email" placeholder='E-Mail' required value={email} onChange={(e) => setEmail(e.target.value)} />
             
              </div>
              <div className="form-control">
                <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
            
              </div>
              <button className="login-btn" >Login</button>
              <p className="text">Not a member yet? <a href="register.html"> Register</a></p>
            </form>
          </div>
        </div>
      </div>

       </div>
    </div>
  )
}
