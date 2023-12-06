import React, { useEffect, useState } from 'react'
import Form from './Form'
import ImageUpload from './Dropzone'
import { addToCart, getCart, uploadImage } from './utils'

export default function App({ home }) {
  //  console.log('Home', home)
  const [size, setSize] = useState('') // size is a variant id
  const [quantity, setQuantity] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [userImage, setUserImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const [cart, setCart] = useState(null)

  const formData = {
    id: size,
    quantity: quantity,
    properties: {
      _image: imageUrl,
    },
    sections: 'ajax-cart',
  }

  const cartCount = document.querySelector('.cart-count')

  useEffect(() => {
    const updateCount = async () => {
      const cart = await getCart()
      setCart(cart)
      if (cartCount) {
        cartCount.innerHTML = cart.item_count
      }
    }
    updateCount()
    console.log(cart)
  }, [isSuccess])

  let enabled = userImage != null && size != ''
  //   console.log('enabled', enabled)

  const addVariantToCart = async () => {
    const imgUrl = await uploadImage(userImage)
    if (imgUrl) {
      setImageUrl(imgUrl)
      const res = await addToCart(formData)
      if (res) {
        console.log(res)
        // const ajaxCart = document.querySelector('.minicart__content')
        // ajaxCart.innerHTML = res.sections['ajax-cart']
        setIsSuccess(true)
        setSize('')
      }
    }
  }

  return (
    <div>
      <div className='w-full bg-bg-primary flex flex-col sm:flex-row gap-8 p-8'>
        <ImageUpload setUserImage={setUserImage} />
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
