import React from 'react'
import cakeImage from './cake1.png';
import shopbtn from './shopbtn.png';
import './HomeShopitems.css';

function HomeShopItems(props) {
  return (
    <div  class="members border-2 rounded-md shadow-2xl duration-100 hover:scale-105" >
                
                <img src={cakeImage} class="catogoryImages"></img>
                <div className='cakeType text-green-700 font-semibold'>{props.type}</div>
        
                <div  class="memberD">
                    <p>Shop Now</p>
                    <img src={shopbtn}></img>
                </div>

            </div>
  )
}

export default HomeShopItems