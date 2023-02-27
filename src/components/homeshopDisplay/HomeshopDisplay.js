import React from 'react'
import HomeShopItems from '../homeshopItems/HomeShopItems';
import './HomeshopDisplay.css';


function HomeshopDisplay() {
    const types=["cakes","celebration_Cake","desserts"];
  return (
    <div className='mainHomeContainer2'>
        <div className='happyCustomerCount2'>
          SHOP NOW
        </div>
        <div className='frontimage2'>
            {
            
            types.map((e)=>{
                return <HomeShopItems type={e}></HomeShopItems>
            })
            
            }
        </div>
    </div>
  )
}

export default HomeshopDisplay