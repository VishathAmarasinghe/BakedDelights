import React from 'react'
import AddItems from '../components/AddItems/AddItems';
import CustomizedPanel from '../components/CustomizedPanel/CustomizedPanel';

import Header from '../components/header/header';
import ListedItems from '../components/ListedItems/ListedItems';
import ReviewItems from '../components/ReviewItems/ReviewItems';
import ReviewProductContainer from '../components/ReviewProductContainer/ReviewProductContainer';
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar';


function ReviewItemsPage() {
  return (
    <div>
        <UpperNotificationBar></UpperNotificationBar>
        <Header></Header>
        <ReviewItems></ReviewItems>
        {/* <CustomizedPanel></CustomizedPanel> */}
        {/* <AddItems></AddItems> */}
        

    </div>
  )
}

export default ReviewItemsPage