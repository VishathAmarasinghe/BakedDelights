import React from 'react';
import './CakeItem.css';
import cakeimage from './cake1.png';
import { useNavigate } from "react-router-dom";

function CakeItem(props) {
  const router=useNavigate();
  return (
    <div className='cakeitem' onClick={()=>{router(`/Single_Cake/?id=${props.item.id}`)}}>
            <img className='cakeItemIMG' src={props.item.img}></img>
            <div className='cakeItemDetails'>
                <h4 className='cakedd'>{props.item.name}</h4>
                <p className='cakedd'>{"5\""}</p>
                <h5 className='cakedd'>{props.item.price}</h5>
            </div>
        </div>
  )
}

export default CakeItem