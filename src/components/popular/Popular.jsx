import './Popular.css'
import React from 'react'
import data_product from '../assets/data'
import Item from '../item/Item'
function Popular() {
  return (
    <div className='popular'>
      <h1>POULAR IN WOMEN</h1>
      <center><hr /></center>
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
        })}
      </div>
    </div>
  )
}

export default Popular
