import React from 'react'
import { useEffect, useState } from 'react'
import { getCurrentUrl, getCurrentProduct } from './utils'
import VariantBadge from './VariantBadge'
import Quantity from './Quantity'

function Form({ addVariantToCart, size, setSize, quantity, setQuantity, enabled, isSuccess }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const currentProduct = await getCurrentProduct()
      setProduct(currentProduct)
    }
    fetchProduct()
  }, [])

  //   console.log(product)

  if (!product) return <h1>Loading...</h1>

  const variants = product.variants

  return (
    <div className='w-full sm:w-1/2 flex flex-col gap-8 bg-bg-primary text-txt-primary py-12'>
      <h4 className='text-txt-primary text-center sm:text-start'>Custom Decal</h4>
      <span className='text-5xl font-black text-center sm:text-start'>$11.11</span>
      <label htmlFor='size'>Size</label>
      <div className='flex flex-wrap gap-4'>
        {variants.map((variant) => (
          <VariantBadge key={variant.id} variant={variant} size={size} setSize={setSize} />
        ))}
      </div>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      {isSuccess && <p className='text-txt-primary text-4xl'>Item added to cart</p>}
      <button className={`bg-white text-black p-4 ${!enabled && 'opacity-30 cursor-default'}`} onClick={addVariantToCart}>
        Add To Cart
      </button>
    </div>
  )
}

export default Form
