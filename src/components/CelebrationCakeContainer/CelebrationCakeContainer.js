import React, { useEffect, useState } from 'react'
import './CelebrationCakeContainer.css';
import CakeItem from '../cakeItem/CakeItem';
import axios from "axios"

function CelebrationCakeContainer() {
    const [cakeList,setCakeList]=useState([4500,5000,4000,6300,4500,2000,3000,4400])
    
    useEffect(() => {
        getCakes()
    }, [])

    const getCakes=async ()=>{
       await axios.get("https://free-food-menus-api-production.up.railway.app/burgers").then((res)=>{
        setCakeList(res.data)
       })
    }
    
  return (
    <div className='cakecontainer'>
        <div className='titleHeader'>
            Celebration Cake
        </div>
        <div className='cakeRaws'>
        {
            cakeList.map((e)=>{
                return <CakeItem item={e}></CakeItem>
            })
        }
        </div>
        
    </div>
  )
}

export default CelebrationCakeContainer