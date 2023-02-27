import React from 'react';
import './BestSellItem.css';
import sellingImg from './cake1.png';

function BestSellItem(props) {
  return (
    <div className='sellItems p-1 shadow-2xl duration-100 hover:scale-105'>
        <img className='bestItem' src={sellingImg}></img>
                <div className='bestItemDataContainer'>
                    <h3>{props.caketype}</h3>
                    <h4>{"8\""}</h4>
                </div>
    </div>
  )
}

export default BestSellItem