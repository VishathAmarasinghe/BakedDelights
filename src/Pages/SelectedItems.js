import React from 'react'
import CustomizedPanel from '../components/CustomizedPanel/CustomizedPanel';

import Header from '../components/header/header';
import ListedItems from '../components/ListedItems/ListedItems';
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar';

function SelectedItems() {
  return (
    <div>
        <UpperNotificationBar></UpperNotificationBar>
        <Header></Header>
        <ListedItems></ListedItems>
        <CustomizedPanel></CustomizedPanel>
        

    </div>
  )
}

export default SelectedItems;