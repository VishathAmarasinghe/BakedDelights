import React from 'react';
import './CustomizedPanel.css';
import closebtn from './closebtn.png';

function CustomizedPanel() {
  return (
    <div className='mainContainerCust'>
        <div className='customizedslide'>
            <div className='textNames'>
                <p>Customize Your Cake</p>
                <img src={closebtn} className='closebnt'></img>
            </div>
            <div className='toppingadder'>
                <p className='typename'>Toppings</p>
                <button className='additionalbtns' type='button'>+Chocolate</button>
                <button className='additionalbtns' type='button'>+Vanilla</button>
                <button className='additionalbtns' type='button'>+Fruits</button>
            </div>
            <div className='toppingadder'>
                <p className='typename'>Sweetness</p>
                <button className='additionalbtns' type='button'>+High</button>
                <button className='additionalbtns' type='button'>+Medium</button>
                <button className='additionalbtns' type='button'>+Low</button>
            </div>
            <div className='toppingadder'>
                <p className='typename'>Nuts</p>
                <button className='additionalbtns' type='button'>+Cashews</button>
                <button className='additionalbtns' type='button'>+Hazel Nuts</button>
                <button className='additionalbtns' type='button'>+Raisins</button>
            </div>
            <div className='toppingadder'>
                <p className='typename'>Vegan</p>
                <button className='additionalbtns' type='button'>Yes</button>
                <button className='additionalbtns' type='button'>No</button>
            </div>
            <button className='donebtn' type='button'>Done</button>
        </div>
    </div>
  )
}

export default CustomizedPanel