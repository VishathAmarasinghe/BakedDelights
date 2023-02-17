import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='contactDetails'>
            <h3>CONTACT US</h3>
            <p>No:20, Kandy Road, Dalugama</p>
            <p>078696969</p>
            <p>bakedDelights@gmail.com</p>
        </div>
        <div className='quickDetails'>
            <h3>QUICK LINKS</h3>
            <p>Home</p>
            <p>Shop</p>
            <p>Cart</p>
            <p>About</p>
        </div>
        <div className='services'>
        <h3>SERVICES</h3>
            <p>Delivery</p>
            <p>Oders</p>
            <p>FQAs</p>
        </div>
        <div className='map'></div>
    </div>
  )
}

export default Footer