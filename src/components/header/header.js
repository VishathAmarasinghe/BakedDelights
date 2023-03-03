import React from 'react'
import logo from './logoimage.png'
import searchbtn from './searchbutton.png';
import userIcon from './userIcon.png';
import shopIcon from './shopIcon.png';
import './header.css';
import { Link } from 'react-router-dom';
import UpperNotificationBar from '../UpperNoficiationBar/UpperNotificationBar';
import { Avatar } from '@mui/material';
import User from '../../images/user.jpg';
import {IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Header() {
  return (
    <div >
     <UpperNotificationBar />
        <div className='header'>
            <ul className='headerUL'>
                <Link to={'/'}>
                    <img className='logo' src={logo} alt='logo'></img>
                </Link>
                <li>
                    <div className='searchBar'>
                            <input className='searchbarinsert text-white' type="text"></input>
                        <div className=''>
                            <img className='searchbtn headerIcons p-1' src={searchbtn} alt='logo'></img>
                        </div>
                    </div>
                </li>
                <li>
                    HOME
                </li>
                <li>
                    <div class="dropdown" style={{zIndex:"5"}}>
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
                    {/* <img className='headerIcons' src={userIcon} alt='logo'></img> */}
                    <Avatar alt="Remy Sharp" src={User}  sx={{ width: 56, height: 56 }} />
                </li>
                <li>
                    {/* <img className='headerIcons' src={shopIcon} alt='logo'></img> */}
                    <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                    </IconButton>
                </li>
            </ul>
        </div>  
    </div>
  )
}

export default Header