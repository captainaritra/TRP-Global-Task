import React from 'react'
import './header.css'
import Logo from './Logo'
import Nav from './Nav'
import SearchBar from './SearchBar'

function Header() {
  return (
   <header id='header' className='header'>
    <Logo/>
    <Nav/>
    <SearchBar/>
    
   </header>
  )
}

export default Header