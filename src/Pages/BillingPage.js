import React from 'react'
import Bill from '../components/Bill/Bill'
import Header from '../components/header/header'
import UpperNotificationBar from '../components/UpperNoficiationBar/UpperNotificationBar'

function BillingPage() {
  return (
    <div>
        <UpperNotificationBar></UpperNotificationBar>
        <Header></Header>
        <Bill></Bill>
    </div>
  )
}

export default BillingPage