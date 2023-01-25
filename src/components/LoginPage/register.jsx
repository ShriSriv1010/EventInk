import React from 'react'
import './LoginPage.css'
export default function Register() {
  return (
    <div>
        <div className="login-form-bd">
        <div className="form-wrapper">
          <div className="form-container">
            <h1> Student Registration</h1>
            <form>
              <div className="form-control">
            
                <input type="email" placeholder='E-mail' required />
             
              </div>
              <div className="form-control">
                <input type="password" placeholder='Password' required />
             </div>
             <div className="form-control">
                <input type="password" placeholder='Re-enter Password' required />
             </div>
             <div className="form-control">
                <input type="text" placeholder='User Name' required />
            </div> 
              <div className="form-control">
                <input type="text" placeholder='University' required />
            </div> 
            <div className="form-control">
                <input type="number" placeholder='Age' required />
            </div>
           

              <button className="login-btn">Register</button>
              <p className="text">Already a member? <a href="register.html"> Sign in</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
