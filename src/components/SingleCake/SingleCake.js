import React, { useEffect, useState } from 'react'
import './SingleCake.css';
import cakeImage from './cake1.png';
import axios from "axios"

function SingleCake({id}) {
  const [item,setItem]=useState({})
     
  useEffect(() => {
    getCakesByID()
}, [])

const getCakesByID=async ()=>{
   await axios.get("https://free-food-menus-api-production.up.railway.app/burgers/"+id).then((res)=>{
    setItem(res.data)
   })
}
  return (
    <div className='cakeMaker'>
        <img className='singleCakeImg' src={item.img}></img>
        <div className='cakeDetails' >
            <div className='cakedesc'>
            <h1 className='mt-2' style={{fontWeight:"bold",fontSize:"36px"}}>{item.name}</h1>
            <h2 className='mt-2'>{"6'66'"}</h2>
            <h3 className='mt-2'>{item.price}</h3>
            <h3 className='mt-2'>{item.price}</h3>
            <p className='mt-2' style={{fontFamily:"Open Sans",fontSize:"20px"}}>{item.dsc}</p>
           
            <div class="form-outline col-3 h5 mt-2">
            <label class="form-label" for="typeNumber">QTY</label>
    <input type="number" class="form-control" />
    
</div>
            </div>
            <div className='col-12 row d-flex justify-content-end'>
            <div className='col-6 row'>
                <div className='col-7 bg-dark px-4 py-3 text-light mx-3' type=''>ADD TO CART</div>
                <div className='col-3 d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SingleCake