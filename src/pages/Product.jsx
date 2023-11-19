import React from 'react'
import all_products from '../components/assets/all_product'

function Product() {
  const {ProductId} = URLSearchParams();
  const product = all_products.find((e)=> e.id=== Number(producutId));
  return (
    <div>
      
    </div>
  )
}

export default Product
