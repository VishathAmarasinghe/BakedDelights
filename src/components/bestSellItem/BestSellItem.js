import React from 'react';
import './BestSellItem.css';
import sellingImg from './cake1.png';

function BestSellItem(props) {
  return (
    <div className='sellItems'>
        <img className='bestItem' src={sellingImg}></img>
                <div className='bestItemDataContainer'>
                    <h3>{props.caketype}</h3>
                    <h4>{"8\""}</h4>
                </div>
    </div>
  )
}

export default BestSellItem