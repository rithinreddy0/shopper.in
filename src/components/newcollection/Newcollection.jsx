import React from 'react'
import './Mewcollection.css'
import new_collection from '../assets/new_collections'
import Item from '../item/Item'
function Newcollection() {
  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item ,i)=>{
            return(<Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}   />)
        })}
      </div>
    </div>
  )
}

export default Newcollection
