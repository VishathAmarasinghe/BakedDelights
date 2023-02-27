import React from 'react'
import cakeImage from './cake1.png';
import shopbtn from './shopbtn.png';
import './HomeShopitems.css';

function HomeShopItems(props) {
  return (
    <div  class="members" >
                
                <img src={cakeImage} class="catogoryImages"></img>
                <div className='cakeType'>{props.type}</div>
        
                <div  class="memberD">
                    <p>Shop Now</p>
                    <img src={shopbtn}></img>
                </div>

            </div>
  )
}

export default HomeShopItems