import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title"><span className="blue">Edi</span><span className="pink">fy</span></h1>
        <p className="subtitle">Login</p>

        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />

        <button className="login-button">Login</button>

        <label className="remember">
          <input type="checkbox" /> Remember Me
        </label>

        <p className="footer">Not a Learner? <button className="join-now">Join Now</button></p>
      </div>
    </div>
  );
}

export default App;
