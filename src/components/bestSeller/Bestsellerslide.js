import React from 'react';
import BestSellItem from '../bestSellItem/BestSellItem';
import './Bestsellerslide.css';


function Bestsellerslide() {
    const caketype=["Carrot Cake","colour Confetti","Ribbon Surprise","Super DaD"];
  return (
    <div className='sellerContainer'>
        <div className='happyCustomerCount4'>
          BEST SELLER
        </div>
        <div className='itemsContainer'>
            {
                caketype.map((e)=>{
                    return <BestSellItem caketype={e}></BestSellItem>
                }
                )
            }
        </div>
        
    </div>
  )
}

export default Bestsellerslide