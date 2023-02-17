import React from 'react';
import PurchaseProductContainer from '../PurchasePruductContainer/PurchaseProductContainer';
import './ListedItems.css';


function ListedItems() {
    
    const oder=["cakeA","cakeB","cakeC","CakeD"];
  return (
    <div className='itemContainer'>
        <div className='columnNames'>
            <div className='productTitle'>Product</div>
            <div className='productprice'>Price</div>
            <div className='productQty'>Qty</div>
            <div className='productsubtotal'>SubTotal</div>
        </div>
        <div className='itemList'>
            {
                oder.map((e)=>{
                    return <PurchaseProductContainer cakename={e}></PurchaseProductContainer>
                })
            }
            
            </div>
            <div className='purchasebtnContainer'>
                <button type='' className='purchasebtn'>Purchase</button>
            </div>
        </div>
  )
}

export default ListedItems