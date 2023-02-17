import React from 'react';
import './CakeItem.css';
import cakeimage from './cake1.png';

function CakeItem(props) {
  return (
    <div className='cakeitem'>
            <img className='cakeItemIMG' src={cakeimage}></img>
            <div className='cakeItemDetails'>
                <h4 className='cakedd'>{"Cake Type"}</h4>
                <p className='cakedd'>{"5\""}</p>
                <h5 className='cakedd'>{props.price}</h5>
            </div>
        </div>
  )
}

export default CakeItem