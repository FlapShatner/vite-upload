import React, { useState } from 'react'
import Form from './Form'
import ImageUpload from './Dropzone'
import { addToCart } from './utils'

export default function App({ home }) {
  //  console.log('Home', home)
  const [size, setSize] = useState('') // size is a variant id
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [url, setUrl] = useState('')

  const formData = {
    id: size,
    quantity: quantity,
    properties: {
      _image: selectedImage,
    },
    sections: 'cart-items,cart-icon-bubble,cart-live-region-text,cart-footer,cart-drawer',
  }

  let enabled = selectedImage != null && size != ''
  //   console.log('enabled', enabled)

  const addVariantToCart = async () => {
    const res = await addToCart(formData)
    if (res) {
      //   console.log(res)
      const cartDrawer = document.querySelector('cart-drawer')
      cartDrawer.outerHTML = res.sections['cart-drawer']
      //   console.log(cartDrawer)
      const cartIcon = document.querySelector('#cart-icon-bubble')
      cartIcon.innerHTML = res.sections['cart-icon-bubble']
      setIsSuccess(true)
      setSize('')
      setUrl('')
    }
  }

  return (
    <div>
      <div className='w-full bg-bg-primary flex flex-col sm:flex-row gap-8 p-8'>
        <ImageUpload setSelectedImage={setSelectedImage} url={url} setUrl={setUrl} />
        <Form
          size={size}
          setSize={setSize}
          quantity={quantity}
          setQuantity={setQuantity}
          addVariantToCart={addVariantToCart}
          enabled={enabled}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  )
}
