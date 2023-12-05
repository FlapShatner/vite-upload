import React from 'react'
import { useEffect, useState } from 'react'
import { getCurrentUrl, getCurrentProduct } from './utils'
import VariantBadge from './VariantBadge'
import Quantity from './Quantity'

function Form() {
 const [product, setProduct] = useState(null)
 const [size, setSize] = useState('')
 const [quantity, setQuantity] = useState(1)

 useEffect(() => {
  const fetchProduct = async () => {
   const currentProduct = await getCurrentProduct()
   setProduct(currentProduct)
  }
  fetchProduct()
 }, [])

 console.log(product)

 if (!product) return <h1>Loading...</h1>

 const variants = product.variants

 return (
  <div className='w-1/2 flex flex-col gap-8 bg-bg-primary text-txt-primary py-12'>
   <h4 className='text-txt-primary'>Custom Decal</h4>
   <span className='text-5xl font-black'>$11.11</span>
   <label htmlFor='size'>Size</label>
   <div className='flex flex-wrap gap-4'>
    {variants.map((variant) => (
     <VariantBadge
      variant={variant}
      size={size}
      setSize={setSize}
     />
    ))}
   </div>
   <Quantity
    quantity={quantity}
    setQuantity={setQuantity}
   />
  </div>
 )
}

export default Form
