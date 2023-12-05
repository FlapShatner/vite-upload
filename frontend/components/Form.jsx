import React from 'react'
import { useEffect, useState } from 'react'
import { getCurrentUrl, getCurrentProduct } from './utils'
import VariantBadge from './VariantBadge'
import Quantity from './Quantity'

function Form({ addVariantToCart, size, setSize, quantity, setQuantity, enabled, isSuccess }) {
  const [product, setProduct] = useState(null)
  const [productPrice, setProductPrice] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      const currentProduct = await getCurrentProduct()
      setProduct(currentProduct)
      setProductPrice(currentProduct.price)
    }
    fetchProduct()
  }, [])

  //   console.log(product)

  if (!product) return <h1>Loading...</h1>

  const variants = product.variants
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(productPrice / 100)

  return (
    <div className='w-full sm:w-1/2 flex flex-col gap-4 bg-bg-primary text-txt-primary py-12'>
      <h3 className='text-accent text-5xl text-center sm:text-start'>{product.title}</h3>
      <span className='text-4xl font-black text-center sm:text-start'>{price}</span>
      <label htmlFor='size'>Size</label>
      <div className='flex flex-wrap gap-2'>
        {variants.map((variant) => (
          <VariantBadge key={variant.id} variant={variant} size={size} setSize={setSize} setProductPrice={setProductPrice} />
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
