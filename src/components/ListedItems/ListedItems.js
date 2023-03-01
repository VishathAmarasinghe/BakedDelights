import React from 'react';
import PurchaseProductContainer from '../PurchasePruductContainer/PurchaseProductContainer';
import './ListedItems.css';
import gloden from './Golden.jpg';
import raspberry from './raspberry.jpg';
import freshfruit from './freshfruit.webp';


function ListedItems() {
    
    const oder=[{cake:"Fresh fruit cake",imageown:freshfruit},{cake:"Raspberry Mousse",imageown:raspberry},{cake:"Goldern vanilla cake",imageown:gloden}];
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
                    return <PurchaseProductContainer cakename={e.cake} imageName={e.imageown}></PurchaseProductContainer>
                })
            }
            
        </div>
        <div className='totalViewer'>
            <div className='subtotal'>Total: 50000</div>
        </div>
            <div className='purchasebtnContainer'>
                <button type='' className='purchasebtn'>Purchase</button>
            </div>
        </div>
  )
}

export default ListedItems