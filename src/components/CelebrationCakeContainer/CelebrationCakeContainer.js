import React from 'react'
import './CelebrationCakeContainer.css';
import CakeItem from '../cakeItem/CakeItem';

function CelebrationCakeContainer() {
    const cakes=[4500,5000,4000,6300,4500,2000,3000,4400];
  return (
    <div className='cakecontainer'>
        <div className='titleHeader'>
            Celebration Cake
        </div>
        <div className='cakeRaws'>
        {
            cakes.map((e)=>{
                return <CakeItem price={e}></CakeItem>
            })
        }
        </div>
        
    </div>
  )
}

export default CelebrationCakeContainer