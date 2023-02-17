import React from 'react'
import Header from '../components/header/header'
import SingleCake from '../components/SingleCake/SingleCake'
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar'

function SingleCakePage() {
  return (
    <div>
        <UpperNotificationBar></UpperNotificationBar>
        <Header></Header>
        <SingleCake></SingleCake>
    </div>
  )
}

export default SingleCakePage