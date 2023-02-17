import React from 'react'
import './SingleCake.css';
import cakeImage from './cake1.png';

function SingleCake() {
  return (
    <div className='cakeMaker'>
        <img className='singleCakeImg' src={cakeImage}></img>
        <div className='cakeDetails'>
            <div className='cakedesc'>
            <h1>{"Cake type"}</h1>
            <h2>{"6'66'"}</h2>
            <h3>{"Price: 12000-15000"}</h3>
            <p>{" a sweet baked food made from a dough or thick batter usually"+ 
            "containing flour and sugar and often shortening, eggs, and a raising agent"}</p>
            </div>
            <div className='cakeButtons'>
                <button className='cakeBTN' type=''>Add To Cart</button>
                <button className='cakeBTN fav' type=''>Add To Favourites</button>
            </div>
        </div>
    </div>
  )
}

export default SingleCake