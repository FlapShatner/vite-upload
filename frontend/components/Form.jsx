import React from 'react'
import { useEffect, useState } from 'react'
import { getCurrentUrl, getCurrentProduct } from './utils'
import VariantBadge from './VariantBadge'

function Form() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const currentProduct = await getCurrentProduct()
      setProduct(currentProduct)
    }
    fetchProduct()
  }, [])

  if (!product) return <h1>Loading...</h1>

  const variants = product.variants

  return (
    <div>
      <h4>Custom Decal</h4>
      <span>$11.11</span>
      <form>
        <label htmlFor='size'>Size</label>
        <div>
          {variants.map((variant) => (
            <VariantBadge variant={variant} key={variant.id} />
          ))}
        </div>
      </form>
    </div>
  )
}

export default Form
