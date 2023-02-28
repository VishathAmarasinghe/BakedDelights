import React from 'react';
import './Bill.css';
import regulations from './regulations.png';

function Bill() {
  return (
    <div className='billShipcontainer'>
        <div className='shippingContainer'>
            <p className='billtext'>Billing & Shipping</p>
            <input className='inputs' type="email"></input>
            <div className='namecontainer'>
                <input className='inputs sd' type="text"></input>
                <input className='inputs sd' type="text"></input>
            </div>
            <input className='inputs' type="text"></input>
            <input className='inputs' type="text"></input>
            <input className='inputs' type="text"></input>
            <input className='inputs' type="text"></input>
            <div className='dategetter'>
                <p className='billtext'>Delivery Date</p>
                <input className='datetime' type="date"></input>
            </div>
            <p className="billtext">Additional Information</p>
            <textarea className='additionalInfo'></textarea>
           
        </div>
        <div className='purchaseinfor'>
            <p className='billtext'>YOUR ORDER</p>
            <div className='containerpayments'>
                <div className='columnadder'>
                    <p className='totaltext'>Product</p>
                    <p className='totaltext'>Subtotal</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Coffee Mocha Cake</p>
                    <p className='pricetext'>Rs. 1500.00</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Subtotal</p>
                    <p className='pricetext'>Rs. 1500.00</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Shipping</p>
                    <p className='pricetext'>Rs. 1500.00</p>
                </div>
                <div className='toppinsAdder'>
                    <p className='totaltext'>Total</p>
                    <p className='pricetext'>Rs. 1500.00</p>
                </div>
                <img className='regualtionIMg' src={regulations}></img>
                <button className='paybtn' type='button'>Pay Now</button>
            </div>

        </div>
    </div>
  )
}

export default Bill;