import React from 'react'
import logo from './logoimage.png'
import searchbtn from './searchbutton.png';
import userIcon from './userIcon.png';
import shopIcon from './shopIcon.png';
import './header.css';

function Header() {
  return (
    <div className='header'>
        <ul className='headerUL'>
            <li>
                <img className='logo' src={logo} alt='logo'></img>
            </li>
            <li>
                <div className='searchBar'>
                <input className='searchbarinsert' type="text"></input>
                <img className='searchbtn headerIcons' src={searchbtn} alt='logo'></img>
                </div>
            </li>
            <li>
                HOME
            </li>
            <li>
                <div class="dropdown">
                <button class="dropbtn">SHOP</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                </div>
            </li>
            <li>
                ABOUT
            </li>
            <li>
                CONTACT
            </li>
            <li>
                <img className='headerIcons' src={userIcon} alt='logo'></img>
            </li>
            <li>
                <img className='headerIcons' src={shopIcon} alt='logo'></img>
            </li>
        </ul>
        
        

        
    </div>
  )
}

export default Header