import React, { useEffect, useState } from 'react';
import './PurchaseProductContainer.css';
import closebtn from './closebtn.png';
import insideImage from './cake1.png';

function PurchaseProductContainer(props) {
  return (
    <div className='listedItems'>
                <div className='closebtnContainer'>
                    <img src={closebtn} className="closebtn"></img>
                </div>
            
                <div className='itemimage'>
                    <img src={insideImage} className='imageInside'></img>
                    <div className='productName'>
                        {props.cakename}
                    </div>
                </div>
                <div className='price'>
                    {"RS:12000"}
                </div>
                <div className='qtybtn'>
                    <div className="quantity-input">
                    <button  className="leftbtn" >
                    &mdash;
                    </button>
                    <input className="inputQry" type="text"  />
                    <button  className="rightbtn" >
                    &#xff0b;
                    </button>  
                    </div>  
                </div>
                <div className='pricetotal'>
                    {"RS:12000"}
                </div>
                <div className='customizeBtndiv'>
                    <button className='cutomizbtn' type=''>Customize</button>
                </div>
 
                </div>
  )
}

export default PurchaseProductContainer