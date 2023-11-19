import React from 'react'
import './css/Shopcategory.css'
import dropdown from '../components/assets/dropdown_icon.png'
import Item from '../components/item/Item';
import all_product from '../components/assets/all_product';

function Shopcat(props) {
  return (
    
    <div className='shop-category'>
      <img src={props.banner} alt='' />
      <p><span>
        showing 1-12 from 36 products
        </span></p>
      <div className="cat1">
        {all_product.map((item,i)=>{
            if (props.category === item.category) {
              return(
                <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              )
            }
          
        })}</div>
      </div>
    
  )
}

export default Shopcat
