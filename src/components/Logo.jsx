import React from 'react'
import './logo.css'
import myLogo from '../images/Logo.png'
function Logo() {
  return (
    <div className="logo-name">
    <a href="/" className="logo">
      <img src={myLogo} alt="Logo" />
      <span>recruit</span>
    </a>
    
  </div>
  )
}

export default Logo