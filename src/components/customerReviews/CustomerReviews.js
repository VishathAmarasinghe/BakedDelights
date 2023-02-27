import React from 'react'
import './CustomerReviews.css';
import userImage from './indupuli.png';

function CustomerReviews() {
  return (
    <div className='reviewContainer'>
        <div className='happyCustomerCount3'>
          CUSTOMER REVIEWS
        </div>
        <div className='reviewSlider'>
            <div className='review'>
                <div className='reviewImagecontainer'>
                    <img className='reviewerIMG' src={userImage}></img>
                </div>
                <div className='reviewText'>
                    <h3><b>Anthony Parker-</b></h3>
                    <h4>DORTMUND</h4>
                    <p>The cake turned out PERFECT!!!! I loved it and everyone ooooohhhhed and ahhhhhhhhd over it.</p>
                </div>
            </div>
            <div className='review'>
                <div className='reviewImagecontainer'>
                    <img className='reviewerIMG' src={userImage}></img>
                </div>
                <div className='reviewText'>
                    <h3><b>Anthony Parker-</b></h3>
                    <h4>DORTMUND</h4>
                    <p>The cake turned out PERFECT!!!! I loved it and everyone ooooohhhhed and ahhhhhhhhd over it.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews